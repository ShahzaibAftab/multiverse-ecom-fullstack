import React from 'react'
import Topbar from './Topbar';
import { Form, InputGroup, Button, Table } from 'react-bootstrap';
import { FaEye } from "react-icons/fa";

const AdminProductView = () => {
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
                    <Button style={{ height: '40px' }}>Add new Product</Button>
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='text-center'><Button className='p-1 px-2 m-0'><FaEye /></Button></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td className='text-center'><Button className='p-1 px-2 m-0'><FaEye /></Button></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default AdminProductView
