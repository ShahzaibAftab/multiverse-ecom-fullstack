import React, { useState } from 'react'
import AdminCanvas from '../components/AdminCanvas'
import { Form, Col, Row, ProgressBar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Topbar from '../components/Topbar'

const Adminaddproduct = () => {
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files).slice(0, 3);
        setFiles(selectedFiles);
    };

    const handleUpload = (e) => {
        e.preventDefault()
        let totalSize = 0;
        files.forEach((file) => {
            totalSize += file.size;
        });

        let uploaded = 0;
        const interval = setInterval(() => {
            if (uploaded >= totalSize) {
                clearInterval(interval);
            } else {
                const increment = Math.floor(totalSize / 100);
                uploaded += increment;
                // Ensure progress does not exceed 100
                setProgress(Math.min((uploaded / totalSize) * 100, 100));
            }
        }, 100);
        console.log(files)
    };

    return (
        <>
            <div className='d-flex'>
                <AdminCanvas />
                <div style={{ width: '1070px', marginLeft: '10px' }} className='bg-info'>
                    <div className='bg-secondary w-100 py-2 d-flex justify-content-end'>
                        <Topbar />
                    </div>
                    <Form>
                        <h3 className='my-5 text-center'>Add a new Product</h3>
                        <Row className="mb-3 mx-2">
                            <Form.Group as={Col} controlId="productName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter product name" />
                                <Form.Text >Note: Before submiting the form, make sure to check for any spelling mistakes</Form.Text>
                            </Form.Group>
                            <Form.Group as={Col} controlId="productImg">
                                <Form.Label>Product Images (max 3)</Form.Label>
                                <Form.Control
                                    className='mb-2'
                                    type="file"
                                    accept=".png"
                                    multiple
                                    onChange={handleFileChange}
                                    disabled={files.length >= 3}
                                />
                                {progress > 0 && (
                                    <ProgressBar
                                        now={progress}
                                        label={`${Math.round(progress)}%`}
                                        animated
                                        className="mb-2"
                                    />
                                )}
                                <button onClick={handleUpload} className='btn btn-primary' disabled={files.length === 0}>
                                    Upload
                                </button>
                            </Form.Group>


                        </Row>
                        <Row className="mb-3 mx-2">
                            <Form.Group as={Col} controlId="price">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" placeholder="Enter price" />
                            </Form.Group>
                            <Form.Group as={Col} controlId="rating">
                                <Form.Label>Rating (out of 5)</Form.Label>
                                <Form.Control type="number" placeholder="default: 5" />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3 mx-3" controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
                        </Form.Group>
                        <div className='d-flex justify-content-center' >
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    </Form>

                </div>
            </div>
        </>
    )
}

export default Adminaddproduct