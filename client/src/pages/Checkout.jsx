import React from 'react'
import Commonheader from '../components/Commonheader'
import { Col, Container, Row, Table } from 'react-bootstrap';

import Deliveryform from '../components/Deliveryform';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, desQuantity } from '../redux/slices/cartSlices';

const Checkout = () => {
    const dispatch = useDispatch()
    const checkoutItems = useSelector(state => state.cart)
    const total = checkoutItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    console.log('i am checkout', checkoutItems)
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
                                <tr className='text-center'>
                                    <th>#</th>
                                    <th>items</th>
                                    <th>quantity</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {checkoutItems.map((obj, index) => {
                                    return (
                                        <tr className='text-center' key={obj.name}>
                                            <td>{index + 1}</td>
                                            <td>{obj.name}</td>
                                            <td ><button type="button" className="btn btn-primary my-0 py-0" onClick={(e) => dispatch(desQuantity({ name: obj.name, price: obj.price }))}>-</button><span className='px-2'>{obj.quantity}</span><button type="button" className="btn btn-primary py-0" onClick={(e) => dispatch(addItem({ name: obj.name, price: obj.price }))}>+</button></td>
                                            <td>{obj.price} <span className='text-success' style={{ fontWeight: '1000' }}>$</span></td>
                                        </tr>
                                    );
                                })}

                                <tr>

                                    <th colSpan={3} className='text-center'>
                                        <h4>
                                            Total
                                        </h4>
                                    </th>
                                    <td className='text-center'>
                                        <p style={{ fontSize: 'x-large' }}>
                                            {/* {total === 0 ? "<p>Cart is Empty</p>" : "/-"} */}
                                            {total} /-
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
