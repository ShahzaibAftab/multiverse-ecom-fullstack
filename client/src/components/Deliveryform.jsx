import React, { useState } from 'react';
import { Button, Dropdown, Form, InputGroup, Spinner } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import PostOrder from '../api/PostOrder';
import { useNavigate } from 'react-router-dom';
import { clearItems } from '../redux/slices/cartSlices';

const DeliveryForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
    const checkoutItems = useSelector(state => state.cart)
    const total = checkoutItems.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const mutation = useMutation({
        mutationFn: PostOrder
    })

    const [formData, setFormData] = useState({
        customerName: '',
        contact: '',
        emailAddress: '',
        postalCode: '',
        city: '',
        province: '',
        address: '',
        paymentMode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleProvinceChange = (province) => {
        setFormData(prevState => ({
            ...prevState,
            province: province
        }));
    };
    const handlePaymentModeChange = (paymentMode) => {
        setFormData(prevState => ({
            ...prevState,
            paymentMode: paymentMode
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (total !== 0) {
            const orderInvoice = { ...formData, products: checkoutItems, total }
            try {
                await mutation.mutate(orderInvoice)
                if (mutation.isSuccess) {
                    setTimeout(() => {
                        dispatch(clearItems())
                        navigate('/')
                    }, 1000);
                }
            } catch (error) {
                console.log(`Error Placing order`)
            }
        }
        else {
            alert('Cart is empty')
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h4 className='text-center text-muted'>Confirm Order</h4>
                <Form.Group className="my-3">
                    <Form.Label>Full Name<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" name="customerName" value={formData.customerName} onChange={handleChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicemailAddress">
                    <Form.Label>Contact<span className='text-danger'>*</span></Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text className='text-muted' id="basic-addon1">+92</InputGroup.Text>
                        <Form.Control
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            placeholder="3*********"
                            aria-describedby="basic-addon1"
                            required
                            type='number'
                        />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicemailAddress">
                    <Form.Label> address<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} required placeholder="hello@quecom.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Postal code:</Form.Label>
                    <Form.Control type="number" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder='(Optional)' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>City<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" name="city" value={formData.city} onChange={handleChange} required />
                </Form.Group>

                <Dropdown onSelect={handleProvinceChange}>
                    <Dropdown.Toggle className='bg-white border-0 btn btn-muted text-muted' required id="dropdown-basic">
                        {formData.province ? formData.province : 'Province'}<span className='text-danger'>*</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey='Punjab'>Punjab</Dropdown.Item>
                        <Dropdown.Item eventKey='Sindh'>Sindh</Dropdown.Item>
                        <Dropdown.Item eventKey='KPK'>KPK</Dropdown.Item>
                        <Dropdown.Item eventKey='Balochistan'>Balochistan</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group className="my-3">
                    <Form.Label>Address<span className='text-danger'>*</span></Form.Label>
                    <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} placeholder='House# Street Block area' required />
                </Form.Group>

                <div className='d-flex justify-content-center'>
                    <Dropdown onSelect={handlePaymentModeChange}>
                        <Dropdown.Toggle variant="warning" className=' text-white' id="dropdown-basic">
                            {formData.paymentMode ? formData.paymentMode : 'Payment Mode:'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item eventKey='cash on Delivery' value='cod' >Cash on Delivery</Dropdown.Item>
                            <Dropdown.Item eventKey='Online' value='Debit/credit'>Debit/Credit card</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <Button variant="primary" type="submit" className='mt-5 w-100'>
                    Confirm
                </Button>
                {mutation.isSuccess && <div className='text-center text-success'>Order Placed</div>}
                {mutation.isLoading && <div className='text-center text-success'><Spinner animation="border" role="status"></Spinner></div>}
                {mutation.isError && <div className='text-center text-success'>Error uploading data, try again later</div>}
            </Form>
        </>
    );
};

export default DeliveryForm;
