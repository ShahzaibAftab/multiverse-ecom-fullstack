import React, { useState } from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";

import { Button, Navbar, Form, Nav, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import Cart from './Cart';

const Header = () => {
    const [displayCart, setdisplayCart] = useState(false)
    const navigate = useNavigate()
    const showCart = () => {
        setdisplayCart(true)
    }
    const hideCart = () => {
        setdisplayCart(false)
    }
    return (
        <>
            <Navbar bg="light" expand="lg" className="justify-content-between px-4 shadow" style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                <Navbar.Brand>Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='mr-auto'>
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Shop</Nav.Link>
                        <Nav.Link >Contact</Nav.Link>
                    </Nav>
                    <Form inline className='d-flex mx-auto'>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ minWidth: '550px' }} />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link onMouseEnter={showCart} onMouseLeave={hideCart}><Cart /></Nav.Link>
                        <Nav.Link onClick={() => navigate('/checkout')}>  Checkout <IoIosLogOut />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            {/* CART */}
            {displayCart && <section className="container-fluid" style={{ position: 'absolute', zIndex: 1000 }}>
                <MDBContainer className="py-1">
                    <MDBRow className="justify-content-center justify-content-md-end">
                        <MDBCol xs="12" md="5" style={{ backgroundColor: '#eee', padding: '10px', borderRadius: '6px' }}>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <MDBTypography tag="h6" className="fw-normal mb-0 text-black">
                                    Shopping Cart
                                </MDBTypography>
                                <div>
                                    <p className="mb-0">
                                        <span className="text-muted">Sort by:</span>
                                        <a href="#!" className="text-body">
                                            price <i className="fas fa-angle-down mt-1"></i>
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <MDBCard className="rounded-3 mb-4 d-flex">
                                <MDBCardBody className="d-flex p-4">
                                    <MDBRow className=" d-flex justify-content-between align-items-center">
                                        <MDBCol className='d-flex justify-content-center' md="3" lg="3" xl="3">
                                            <MDBCardImage className="rounded-3" fluid style={{ height: '50px', width: '50px' }}
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                                                alt="Cotton T-shirt" />
                                        </MDBCol>
                                        <MDBCol className='d-flex justify-content-center' md="3" lg="3" xl="3">
                                            <p className="small fw-normal mb-2">Basic T-shirt</p>

                                        </MDBCol>
                                        <MDBCol md="2" lg="2" xl="2"
                                            className="d-flex align-items-center justify-content-center">
                                            <MDBBtn color="link" className="px-2 small">
                                                <MDBIcon fas icon="minus" />
                                            </MDBBtn>
                                            <span size="sm" className='text-muted px-1' style={{ border: '1px solid #EEEEEE', borderRadius: '5px' }}>3</span>
                                            <MDBBtn color="link" className="px-2 small">
                                                <MDBIcon fas icon="plus" className='small' />
                                            </MDBBtn>
                                        </MDBCol>

                                        <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                                            <MDBTypography tag="h5" className="mb-0 small">
                                                <span className='text-success' style={{ fontWeight: '1000' }}>$</span>499
                                            </MDBTypography>
                                        </MDBCol>
                                        <MDBCol md="1" lg="1" xl="1" className="text-end">
                                            <a href="#!" className="text-danger">
                                                <MDBIcon fas icon="trash text-danger" size="lg" />
                                            </a>
                                        </MDBCol>

                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                            <div className='d-flex justify-content-end'>
                                <MDBBtn color="muted" size="sm">
                                    Checkout <IoIosLogOut />
                                </MDBBtn>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>}

        </>

    );
};

export default Header;
