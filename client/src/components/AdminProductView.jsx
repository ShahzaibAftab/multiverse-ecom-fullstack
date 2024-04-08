import React, { useState } from 'react';
import Topbar from './Topbar';
import { Form, InputGroup, Button, Table, Spinner, Modal } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMutation, useQuery } from 'react-query';
import getProduct from '../api/GetProduct';
import { Link } from 'react-router-dom';
import axiosInstance from '../utils/AxiosInstance';

const AdminProductView = () => {

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const { isLoading, error, data } = useQuery({ queryKey: ['todos'], queryFn: getProduct });
    const [showEditModal, setShowEditModal] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const [productId, setproductId] = useState()
    const [productImg, setProductImg] = useState([])

    const mutation = useMutation({
        mutationFn: async (editedValues) => {
            try {
                const res = await axiosInstance.put(`/api/product/update-product/${productId}`, editedValues)
                return res.data;
            } catch (error) {
                throw new Error(`Error updating order: ${error.message}`);
            }
        },
    });
    
    const handleEdit = (product) => {
        setproductId(product._id)
        setEditProduct(product);
        setShowEditModal(true);
    };

    const handleCloseEditModal = () => {
        setShowEditModal(false);
        setEditProduct(null);
    };

    const handleSaveEdit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('productName', editProduct.productName);
        formData.append('price', editProduct.price);
        formData.append('rating', editProduct.rating);
        formData.append('description', editProduct.description);

        for (let i = 0; i < productImg.length; i++) {
            formData.append('productImg', productImg[i]);
        }

        try {
            await mutation.mutate(formData)
        } catch (error) {
            console.log('error', error)
        }
        handleCloseEditModal()
    }
    const handledelete = (id) => {
        setproductId(id)
        handleShow2()
    }
    const confirmDeleteOrder = () => {
        handleClose2()
    }
    if (isLoading) {
        return <div className='d-flex justify-content-center align-center vh-100'> <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner></div>
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }
    if (mutation.isSuccess) {
        console.log('success')

    }
    if (mutation.isError) {
        console.log('error updating', error)
    }
    return (
        <>
            <div className='m-1 pt-3 p-5 bg-info' style={{ maxHeight: '630px', minWidth: '80%', overflowY: 'scroll' }}>
                <div className='d-flex justify-content-between'>
                    <Form style={{ width: '70%' }}>
                        <InputGroup className="mb-3 ml-3">
                            <Form.Control
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="basic-addon2"
                            />
                            <Button>Search</Button>
                        </InputGroup>
                    </Form>
                    <Link to='/add-product'>   <Button style={{ height: '40px' }}>Add new Product</Button>
                    </Link>
                    <Topbar />
                </div>
                {/* TABLE */}
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Description</th>
                            <th>Images</th>
                            <th className='text-center'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((product, index) => (
                            <tr key={product._id}>
                                <td>{index + 1}.</td>
                                <td>{product.productName}</td>
                                <td>{product.price}</td>
                                <td>{product.rating}</td>
                                <td>{product.description}</td>
                                <td>
                                    {product.productImg.map(img => (
                                        <img key={img._id} src={img.img} alt="Product" style={{ width: '50px', height: '50px', marginRight: '2px' }} />
                                    ))}
                                </td>
                                <td className='d-flex flex-column' >
                                    <Button className='p-1 px-2 m-0 mt-3'><FaEye /></Button>
                                    <Button className='p-1 px-2 m-0 mt-1' onClick={() => handleEdit(product)}><HiMiniPencilSquare /></Button>
                                    <Button className='btn btn-danger p-1 px-2 m-0 mt-1 mb-4' onClick={() => handledelete(product._id)}><RiDeleteBin6Line /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {/* Delete modal confirmation */}
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure? Product and its data would be deleted</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose2}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={confirmDeleteOrder}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* Edit Modal */}
            <Modal show={showEditModal} onHide={handleCloseEditModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Add form fields here for editing */}
                    {editProduct && (
                        <>
                            <Form.Group controlId="editProductName">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={editProduct.productName}
                                    onChange={(e) => setEditProduct({ ...editProduct, productName: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group controlId="editPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" value={editProduct.price} onChange={(e) => setEditProduct({ ...editProduct, price: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="editRating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="number" value={editProduct.rating} onChange={(e) => setEditProduct({ ...editProduct, rating: e.target.value })} />
                            </Form.Group>
                            <Form.Group controlId="editDesc">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" value={editProduct.description} onChange={(e) => setEditProduct({ ...editProduct, description: e.target.value })} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className='mx-3'>Product Images</Form.Label>
                                {editProduct.productImg.map(img => (
                                    <img key={img._id} src={img.img} alt="Product" style={{ width: '50px', height: '50px', marginRight: '2px' }} />
                                ))}
                            </Form.Group>
                            <Form.Group controlId="productImg">
                                <Form.Label>Product Images (max 3)</Form.Label>
                                <Form.Control
                                    className='mb-2'
                                    onChange={(e) => { setProductImg(e.target.files) }}
                                    multiple={true}
                                    type='file'
                                />
                            </Form.Group>
                            {/* Add more fields as needed */}
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseEditModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveEdit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AdminProductView;
