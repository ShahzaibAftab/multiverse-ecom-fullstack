import React, { useState, useEffect } from 'react'
import AdminCanvas from '../components/AdminCanvas'
import { Form, Col, Row,Spinner } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Topbar from '../components/Topbar'
import { useMutation } from 'react-query'
import axios from 'axios'
import { BASEURL } from '../App'

const Adminaddproduct = () => {

    const [productName, setproductName] = useState('')
    const [price, setprice] = useState(0)
    const [rating, setrating] = useState(5)
    const [description, setdescription] = useState('')
    const [productImg, setProductImg] = useState([]) // Initialize as an empty array
    const [uploadSuccess, setUploadSuccess] = useState(false)
    const [uploading, setUploading] = useState(false)

    const [browserCookie, setBrowserCookie] = useState(null)

    const axiosInstance = axios.create({
        baseURL: BASEURL,
        headers: {
            "auth": `auth=${browserCookie}`,
            'Content-Type': 'multipart/form-data'
        }
    });

    useEffect(() => {
        getCookieFromBrowser()
    }, [])

    const getCookieFromBrowser = async () => {
        try {
            const cookie = document.cookie.split(";").find((cookie) => cookie.trim().startsWith("auth"));
            const cookieValue = cookie ? cookie.split("=")[1] : null;
            setBrowserCookie(cookieValue)
        } catch (error) {
            console.log("Error getting cookies", error)
        }
    }

    const mutation = useMutation({
        mutationFn: async (formData) => {
            try {
                setUploading(true);
                const res = await axiosInstance.post('/api/product/add-product', formData);
                console.log(res.data);
                return res.data; // Returning data from mutation function
            } catch (error) {
                console.error('Error in mutationFn:', error);
                throw error; // Re-throw the error for the mutation hook to handle
            } finally {
                setUploading(false);
            }
        },
        onSuccess: () => {
            setUploadSuccess(true);
            setTimeout(() => {
                setUploadSuccess(false);
                // Reset form fields after success message is cleared
                setproductName('');
                setprice(0);
                setrating(5);
                setdescription('');
                setProductImg([]);
                window.location.reload()
            }, 2000); // Clear success message after 3 seconds
        }
    });

    const handleRatingChange = (e) => {
        let value = parseInt(e.target.value, 10); // Parse the input value as an integer
        if (!isNaN(value)) {
            // Ensure the value is within the specified range
            value = Math.min(Math.max(value, 1), 5);
            setrating(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productName', productName);
        formData.append('price', price);
        formData.append('rating', rating);
        formData.append('description', description);

        for (let i = 0; i < productImg.length; i++) {
            formData.append('productImg', productImg[i]);
        }

        if (browserCookie) {
            try {
                await mutation.mutate(formData);
            } catch (error) {
                console.error('Error adding a new Product', error);
                // Handle the error here
            }
        } else {
            alert('No cookie Found');
        }
    };

    return (
        <>
            <div className='d-flex'>
                <AdminCanvas />
                <div style={{ width: '1070px', marginLeft: '10px' }} className='bg-info'>
                    <div className='bg-secondary w-100 py-2 d-flex justify-content-end'>
                        <Topbar />
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <h3 className='my-5 text-center'>Add a new Product</h3>
                        <Row className="mb-3 mx-2">
                            <Form.Group as={Col} controlId="productName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" value={productName} onChange={(e) => setproductName(e.target.value)} placeholder="Enter product name" />
                                <Form.Text >Note: Before submitting the form, make sure to check for any spelling mistakes</Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} controlId="productImg">
                                <Form.Label>Product Images (max 3)</Form.Label>
                                <Form.Control
                                    className='mb-2'
                                    onChange={(e) => { setProductImg(e.target.files) }}
                                    multiple={true}
                                    type='file'
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3 mx-2">
                            <Form.Group as={Col} controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" value={price} min={1} onChange={(e) => setprice(e.target.value)} placeholder="Enter price" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="rating">
                                <Form.Label>Rating (out of 5)</Form.Label>
                                <Form.Control type="number" value={rating} onChange={handleRatingChange} min={1} max={5} placeholder="default: 5" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 mx-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Enter description" />
                        </Form.Group>
                        <div className='d-flex justify-content-center' >
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            {uploadSuccess && <div className='text-center text-success'>Upload successful</div>}
                            {uploading && <div className='text-center text-success'><Spinner animation="border" role="status">
                                <span className="sr-only">Loading...</span>
                            </Spinner>Uploading</div>}
                            {mutation.isError && <div className='text-center text-success'>Error uploading data, try again later</div>}
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Adminaddproduct;
