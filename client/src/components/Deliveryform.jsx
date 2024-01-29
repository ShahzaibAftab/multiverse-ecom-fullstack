import React from 'react'
import { Button, Dropdown, Form, InputGroup } from 'react-bootstrap'

const Deliveryform = () => {
    return (
        <>

            <Form>
                <h4 className='text-center text-muted' >Confirm Order</h4>
                <Form.Group className="my-3">
                    <Form.Label>Full Name<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contact<span className='text-danger'>*</span></Form.Label>

                    <InputGroup className="mb-3">
                        <InputGroup.Text className='text-muted' id="basic-addon1">+92</InputGroup.Text>
                        <Form.Control
                            placeholder="3*********"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="email" placeholder="hello@quecom.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Postal code:</Form.Label>
                    <Form.Control type="number" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>City<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Dropdown>
                    <Dropdown.Toggle className='bg-white border-0 btn btn-muted text-muted' id="dropdown-basic">
                        Province<span className='text-danger'>*</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item name='province' value='punjab'>Punjab</Dropdown.Item>
                        <Dropdown.Item name='province' value='sindh'>Sindh</Dropdown.Item>
                        <Dropdown.Item name='province' value='KPK'>KPK</Dropdown.Item>
                        <Dropdown.Item name='province' value='balochistan'>Balochistan</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group className="my-3">
                    <Form.Label>Address<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <div className='d-flex justify-content-center'>

                    <Dropdown>
                        <Dropdown.Toggle variant="warning" className=' text-white' id="dropdown-basic">
                            Payment Mode:
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item name='payment' value='cod' >Cash on Delivery</Dropdown.Item>
                            <Dropdown.Item name='payment' value='Debit/credit'>Debit/Credit card</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Button variant="primary" type="submit" className='mt-5 w-100'>
                    Confirm
                </Button>
            </Form>


        </>
    )
}

export default Deliveryform
