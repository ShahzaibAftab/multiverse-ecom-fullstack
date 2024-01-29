import React from 'react'
import Commonheader from '../components/Commonheader'
import { Col, Container, Row, Table } from 'react-bootstrap';

import Deliveryform from '../components/Deliveryform';

const Checkout = () => {
    return (
        <>
            <Commonheader />
            <Container fluid >
                <Row className='mt-5'>
                    <Col>
                        <div className='mx-5'>
                            <div style={{ borderRadius: '20px', backgroundColor: '#F8F9F8' }} className='border p-5'>
                                <Deliveryform />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Table style={{ minHeight: '350px' }} className='overflow-scroll flex-wrap' bordered hover>
                            <thead>
                                <tr>
                                    <th colSpan={4} className='text-center'>
                                        <h5 className='text-muted'>
                                            Checkout
                                        </h5>
                                    </th>
                                </tr>
                                <tr>
                                    <th>#</th>
                                    <th>items</th>
                                    <th>quantity</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td >Dairy Omung</td>
                                    <td >*2</td>
                                    <td>550</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Dairy Omung</td>
                                    <td>*2</td>
                                    <td>550</td>
                                </tr>
                                <tr>

                                    <th colSpan={3} className='text-center'>
                                        <h4>
                                            Total
                                        </h4>
                                    </th>
                                    <td className='text-center'>
                                        <p style={{ fontSize: 'x-large' }}>
                                            550/-
                                        </p>
                                    </td>
                                </tr>


                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Container>

        </>
    )
}

export default Checkout
