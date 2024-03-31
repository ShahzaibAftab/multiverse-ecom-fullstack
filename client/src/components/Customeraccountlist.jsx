import React, { useEffect } from 'react'
import Topbar from './Topbar';
import { Form, InputGroup, Button, Table, Spinner } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import GetCustomer from '../api/GetCustomer';
import axios from 'axios';
import { BASEURL } from '../App';
import getCookieFromBrowser from '../utils/getCookieFromBrowser';

const Customeraccountlist = () => {
    useEffect(() => {


        return () => {

        }
    }, [])

    const { isLoading, error, data } = useQuery(['getCustomerInfo'], GetCustomer);

    if (isLoading) {
        return <div className='d-flex justify-content-center align-center vh-100'> <Spinner animation="border" role="status">
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
                            <th>Profile Picture</th>
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
                                <td>{order.customerName}</td>
                                <td>{order.clientPhoto}</td>
                                <td>{order.contact}</td>
                                <td>{order.emailAddress}</td>
                                <td>{order.postalCode}</td>
                                <td>{order.city}</td>
                                <td>{order.province}</td>
                                <td>{order.address}</td>
                                <td>{order.orders.length}</td>
                                <td className='d-flex flex-column' >
                                    <Button className='p-1 px-2 m-0 mt-3'><FaEye /></Button>
                                    <Button className='p-1 px-2 m-0 mt-1'><HiMiniPencilSquare /></Button>
                                    <Button className='btn btn-danger p-1 px-2 m-0 mt-1 mb-3'><RiDeleteBin6Line /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default Customeraccountlist
