import React, { useState } from 'react';
import Topbar from './Topbar';
import { Form, InputGroup, Button, Table, Spinner, Modal } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import GetCustomer from '../api/GetCustomer';
import PutCustomer from '../api/PutCustomer';

const Customeraccountlist = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [deleteCustomer, setDeleteCustomer] = useState()
    const [editedCustomer, setEditedCustomer] = useState(null);

    const mutation = useMutation({
        mutationFn: async (editedValues) => {
            try {
                const { _id, ...editedValuesWithoutId } = editedValues; //remove _id
                const res = await PutCustomer(_id, editedValuesWithoutId)
                return res;
            } catch (error) {
                throw new Error(`Error updating order: ${error.message}`);
            }
        },
    });
    const { isLoading, error, data } = useQuery(['getCustomerInfo'], GetCustomer);

    const handleEdit = (customer) => {
        setEditedCustomer(customer);
        handleShow();
    };
    const handleOrderChange = (newValue, index) => {
        setEditedCustomer(prevCustomer => {
            const updatedOrders = [...prevCustomer.orders];
            updatedOrders[index] = { id: newValue };
            return { ...prevCustomer, orders: updatedOrders };
        });
    };
    const handlecancelEdit = () => {
        setEditedCustomer(null)
        handleClose()
    }
    const handleUpdateCustomer = async () => {
        console.log('Updated Customer:', editedCustomer);
        try {
            await mutation.mutate(editedCustomer)
        } catch (error) {
            console.log('Error Updating', error)
        }
        handleClose();
    };
    if (mutation.isSuccess) {
        alert('success')
        return;
    }

    if (isLoading) {
        return <div className='d-flex justify-content-center align-center vh-100'> <Spinner animation="border" role="status"></Spinner></div>;
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const handleDelete = (id) => {
        handleShow2()
        setDeleteCustomer(id)
        console.log('id', id)
    }
    const confirmDeleteOrder = () => {
        console.log('confirmDeleteOrder called')
    }
    return (
        <>
            <div className='m-1 pt-3 p-5 bg-info' style={{ maxHeight: '630px', minWidth: '80%', overflowY: 'scroll' }}>
                <div className='d-flex justify-content-between'>
                    <Form style={{ width: '70%' }}>
                        <InputGroup className="mb-3 ml-3">
                            <Form.Control placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" />
                            <Button>Search</Button>
                        </InputGroup>
                    </Form>
                    <Link to='/add-product'>
                        <Button style={{ height: '40px' }}>Add new Product</Button>
                    </Link>
                    <Topbar />
                </div>
                {/* TABLE */}
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Profile Picture</th>
                            <th>Customer Name</th>
                            <th>Contact</th>
                            <th>Email Address</th>
                            <th>Postal Code</th>
                            <th>City</th>
                            <th>Province</th>
                            <th>Address</th>
                            <th>Orders</th>
                            <th className='text-center'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}.</td>
                                <td>
                                    <img src={order.clientPhoto} alt='client' loading="lazy" style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                                </td>
                                <td>{order.customerName}</td>
                                <td>{order.contact}</td>
                                <td>{order.emailAddress}</td>
                                <td>{order.postalCode}</td>
                                <td>{order.city}</td>
                                <td>{order.province}</td>
                                <td>{order.address}</td>
                                <td>{order.orders.length}</td>
                                <td className='d-flex flex-column' >
                                    <Button className='p-1 px-2 m-0 mt-3'><FaEye /></Button>
                                    <Button className='p-1 px-2 m-0 mt-1' onClick={() => handleEdit(order)}><HiMiniPencilSquare /></Button>
                                    <Button className='btn btn-danger p-1 px-2 m-0 mt-1 mb-3' onClick={() => handleDelete(order._id)}><RiDeleteBin6Line /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {/* Delete modal confirmation */}
            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Customer Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure? account and its data would be deleted</Modal.Body>
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Customer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" value={editedCustomer ? editedCustomer.address : 'Not Found'} onChange={(e) => setEditedCustomer({ ...editedCustomer, address: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="city">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" value={editedCustomer ? editedCustomer.city : 'Not Found'} onChange={(e) => setEditedCustomer({ ...editedCustomer, city: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="clientPhoto">
                            <Form.Label>Profile Photo</Form.Label>
                            <img className='m-2' src={editedCustomer ? editedCustomer.clientPhoto : 'Not Found'} alt='client' loading="lazy" style={{ height: '50px', width: '50px', borderRadius: '5px' }} />
                            <Form.Control type="file" onChange={(e) =>
                                setEditedCustomer({ ...editedCustomer, clientPhoto: e.target.files[0] })} />
                        </Form.Group>
                        <Form.Group controlId="contact">
                            <Form.Label>Contact</Form.Label>
                            <Form.Control type="text" value={editedCustomer ? editedCustomer.contact : 'Not Found'} onChange={(e) => setEditedCustomer({ ...editedCustomer, contact: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="customerName">
                            <Form.Label>Customer Name</Form.Label>
                            <Form.Control type="text" value={editedCustomer ? editedCustomer.customerName : 'Not Found'} onChange={(e) => setEditedCustomer({ ...editedCustomer, customerName: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="emailAddress">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" value={editedCustomer ? editedCustomer.emailAddress : 'Not Found'} onChange={(e) => setEditedCustomer({ ...editedCustomer, emailAddress: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="postalCode">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control type="text" value={editedCustomer ? editedCustomer.postalCode : 'Not Found'} onChange={(e) => setEditedCustomer({ ...editedCustomer, postalCode: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="province">
                            <Form.Label>Province</Form.Label>
                            <Form.Control type="text" value={editedCustomer ? editedCustomer.province : 'Not Found'} onChange={(e) => setEditedCustomer({ ...editedCustomer, province: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="orders">
                            <Form.Label>Orders</Form.Label>
                            <Form.Control as="ul">
                                {editedCustomer && editedCustomer.orders.map((order, index) => (
                                    <div key={index}>
                                        <Form.Control
                                            type="text"
                                            value={order ? order.id : 'not found'}
                                            onChange={(e) => handleOrderChange(e.target.value, index)}
                                        />
                                    </div>
                                ))}
                            </Form.Control>
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handlecancelEdit}>Cancel</Button>
                    <Button variant="primary" onClick={handleUpdateCustomer}>Update Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Customeraccountlist;
