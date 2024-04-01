import React from 'react'
import Topbar from './Topbar';
import { Form, InputGroup, Button, Table, Spinner } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import { Link } from 'react-router-dom';
i
const Customerorderlist = () => {
  
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
                            <tr key={order._id}>
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
                                    <Button className='p-1 px-2 m-0 mt-3 btn btn-danger'>X</Button>
                                    <Button className='p-1 px-2 m-0 mt-1 btn btn-success'><TiTick /></Button>
                                </td>
                            </tr>

                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Customerorderlist
