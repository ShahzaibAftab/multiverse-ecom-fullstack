import React, { useState } from 'react';
import Topbar from './Topbar';
import { Form, InputGroup, Button, Table, Spinner } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import getOrder from '../api/GetOrder';
import { useQuery } from 'react-query';

const Customerorderlist = () => {
    const { isLoading, error, data } = useQuery({ queryKey: ['getOrder'], queryFn: getOrder })
    const [editedOrder, setEditedOrder] = useState(null);
    const [editedCustomerName, setEditedCustomerName] = useState('');
    const [editedContact, setEditedContact] = useState('');
    const [editedEmailAddress, setEditedEmailAddress] = useState('');
    const [editedPostalCode, setEditedPostalCode] = useState('');
    const [editedCity, setEditedCity] = useState('');
    const [editedProvince, setEditedProvince] = useState('');
    const [editedAddress, setEditedAddress] = useState('');
    const [editedPaymentMode, setEditedPaymentMode] = useState('');
    const [editedTotal, setEditedTotal] = useState(0);
    const [editedProducts, setEditedProducts] = useState([]);

    const handleEdit = (order) => {
        setEditedOrder(order);
        setEditedCustomerName(order.customerName);
        setEditedContact(order.contact);
        setEditedEmailAddress(order.emailAddress);
        setEditedPostalCode(order.postalCode);
        setEditedCity(order.city);
        setEditedProvince(order.province);
        setEditedAddress(order.address);
        setEditedPaymentMode(order.paymentMode);
        setEditedTotal(order.total);
        setEditedProducts(order.products);
    }

    const handleCancelEdit = () => {
        setEditedOrder(null);
        // Reset all edit fields
        setEditedCustomerName('');
        setEditedContact('');
        setEditedEmailAddress('');
        setEditedPostalCode('');
        setEditedCity('');
        setEditedProvince('');
        setEditedAddress('');
        setEditedPaymentMode('');
        setEditedTotal(0);
        setEditedProducts([]);
    }

    const confirmEdit = (orderId) => {

        // Create an object containing all values to reset
        const submittedValues = {
            editedOrder,
            editedCustomerName,
            editedContact,
            editedEmailAddress,
            editedPostalCode,
            editedCity,
            editedProvince,
            editedAddress,
            editedPaymentMode,
            editedTotal,
            editedProducts,
        };
        console.log('id', orderId, 'object', submittedValues);

        // Reset all edit fields
        // Object.keys(resetValues).forEach(key => {
        //     eval(`set${key.charAt(0).toUpperCase() + key.slice(1)}(resetValues[key])`);
        // });
    }

    const handleProductChange = (index, key, value) => {
        const newProducts = [...editedProducts];
        newProducts[index][key] = value;
        setEditedProducts(newProducts);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'customerName':
                setEditedCustomerName(value);
                break;
            case 'contact':
                setEditedContact(value);
                break;
            case 'emailAddress':
                setEditedEmailAddress(value);
                break;
            case 'postalCode':
                setEditedPostalCode(value);
                break;
            case 'city':
                setEditedCity(value);
                break;
            case 'province':
                setEditedProvince(value);
                break;
            case 'address':
                setEditedAddress(value);
                break;
            case 'paymentMode':
                setEditedPaymentMode(value);
                break;
            case 'total':
                setEditedTotal(value);
                break;
            default:
                break;
        }
    };

    if (isLoading) {
        return <div className='d-flex justify-content-center align-center vh-100'> <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner></div>
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
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
                            <th>Customer Name</th>
                            <th>Contact</th>
                            <th>Email Address</th>
                            <th>Postal Code</th>
                            <th>City</th>
                            <th>Province</th>
                            <th>Address</th>
                            <th>Payment Mode</th>
                            <th>Total</th>
                            <th>Order Items</th>
                            <th className='text-center'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((order, index) => (
                            <React.Fragment key={order._id}>
                                <tr>
                                    <td>{index + 1}.</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.contact}</td>
                                    <td>{order.emailAddress}</td>
                                    <td>{order.postalCode}</td>
                                    <td>{order.city}</td>
                                    <td>{order.province}</td>
                                    <td>{order.address}</td>
                                    <td>{order.paymentMode}</td>
                                    <td>{order.total}</td>
                                    <td>
                                        {order.products.map(obj => (
                                            `${obj.name} x ${obj.quantity} x ${obj.price}`
                                        ))}
                                    </td>
                                    <td className='d-flex flex-column' >
                                        <Button className='p-1 px-2 m-0 mt-3'><FaEye /></Button>
                                        <Button className='p-1 px-2 m-0 mt-1' onClick={() => handleEdit(order)}><HiMiniPencilSquare /></Button>
                                        <Button className='btn btn-danger p-1 px-2 m-0 mt-1 mb-3'><RiDeleteBin6Line /></Button>
                                    </td>
                                </tr>
                                {/* edit functionality*/}
                                {editedOrder && editedOrder._id === order._id && (
                                    <tr>
                                        <td colSpan="12">
                                            <Form>
                                                <Form.Control type="text" name="customerName" placeholder="Enter customer name" value={editedCustomerName} onChange={handleInputChange} />
                                                <Form.Group controlId="formContact">
                                                    <Form.Label>Contact</Form.Label>
                                                    <Form.Control type="text" name="contact" placeholder="Enter contact" value={editedContact} onChange={handleInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="formEmailAddress">
                                                    <Form.Label>Email Address</Form.Label>
                                                    <Form.Control type="email" name="emailAddress" placeholder="Enter email address" value={editedEmailAddress} onChange={handleInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="postalCode">
                                                    <Form.Label>Postal</Form.Label>
                                                    <Form.Control type="number" name="postalCode" placeholder="Enter Postal Code" value={editedPostalCode} onChange={handleInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="city">
                                                    <Form.Label>City</Form.Label>
                                                    <Form.Control type="text" name="city" placeholder="Enter City" value={editedCity} onChange={handleInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="province">
                                                    <Form.Label>Province</Form.Label>
                                                    <Form.Control type="text" name="province" value={editedProvince} onChange={handleInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="address">
                                                    <Form.Label>Address</Form.Label>
                                                    <Form.Control type="text" name="address" value={editedAddress} onChange={handleInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="paymentMode">
                                                    <Form.Label>Payment Mode</Form.Label>
                                                    <Form.Control type="text" name="paymentMode" value={editedPaymentMode} onChange={handleInputChange} />
                                                </Form.Group>
                                                <Form.Group controlId="formProducts">
                                                    <Form.Label>Order Items</Form.Label>
                                                    {editedProducts.map((product, index) => (
                                                        <div key={index} className='d-flex'>
                                                            <Form.Control
                                                                type="text"
                                                                placeholder={`Product ${index + 1} Name`}
                                                                value={product.name}
                                                                onChange={(e) => handleProductChange(index, 'name', e.target.value)}
                                                            />
                                                            <Form.Control
                                                                type="number"
                                                                placeholder={`Product ${index + 1} Quantity`}
                                                                value={product.quantity}
                                                                onChange={(e) => handleProductChange(index, 'quantity', parseInt(e.target.value))}
                                                            />{console.log(product)}
                                                            <Form.Control
                                                                type="number"
                                                                placeholder={`Product ${index + 1} Price`}
                                                                value={product.price}
                                                                onChange={(e) => handleProductChange(index, 'price', parseFloat(e.target.value))}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form.Group>
                                                <Form.Group controlId="total">
                                                    <Form.Label>total</Form.Label>
                                                    <Form.Control type="number" name="total" value={editedTotal} onChange={handleInputChange} />
                                                </Form.Group>
                                            </Form>
                                            <div className='d-flex justify-content-around'>
                                                <Button className='p-1 px-2 m-0 mt-3 btn btn-danger' onClick={handleCancelEdit}>Cancel</Button>
                                                <Button className='p-1 px-2 m-0 mt-1 btn btn-success' onClick={() => confirmEdit(order._id)}>Confirm</Button>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Customerorderlist;
