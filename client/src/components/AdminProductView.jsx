import React from 'react'
import Topbar from './Topbar';
import { Form, InputGroup, Button, Table, Spinner } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useQuery } from 'react-query';
import getProduct from '../api/GetProduct';
import { Link } from 'react-router-dom';

const AdminProductView = () => {
    const { isLoading, error, data } = useQuery({ queryKey: ['todos'], queryFn: getProduct })

    if (isLoading) {
        return <div className='d-flex justify-content-center align-center'> <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner></div>
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    return (
        <>
            <div className='m-1 pt-3 p-5 bg-info' style={{ minWidth: '80%' }}>
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
                        {data.map((product, index) => (
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
                                    <Button className='p-1 px-2 m-0 mt-1'><HiMiniPencilSquare /></Button>
                                    <Button className='btn btn-danger p-1 px-2 m-0 mt-1 mb-4'><RiDeleteBin6Line /></Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default AdminProductView
