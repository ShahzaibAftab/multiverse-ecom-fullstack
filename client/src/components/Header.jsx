import React from 'react';
import { Button, NavDropdown, Navbar, Form, Nav, FormControl } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import Cart from './Cart';
import logo from '../components/images/logo.png'
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
    const navigate=useNavigate()
    return (
        // <>
        //     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        //         <Navbar.Brand href="/">
        //             <img className='qcom-logo' src={logo} alt='logo' />
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">
        //             <Nav className="mx-auto d-flex flex-column justify-content-center align-center pt-5">
        //                 <Form className="d-flex mb-5" style={{ width: '550px', marginRight: '100px' }}>
        //                     <FormControl
        //                         // style={{ width: '550px' }}
        //                         type="search"
        //                         className="mr-2"
        //                         placeholder="mobile phones, tablets, smartwatches..."
        //                         aria-label="Search"
        //                     />
        //                     <Button type='button' variant="outline-success">Search</Button>
        //                 </Form>
        //                 <div className='d-flex mx-3'>
        //                     <NavDropdown title="Categories" id="collasible-nav-dropdown">
        //                         <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        //                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                         <NavDropdown.Divider />
        //                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        //                     </NavDropdown>
        //                     <Nav.Link className='mx-4' href="#features">Features</Nav.Link>
        //                     <Nav.Link className='mx-4' href="#features">World</Nav.Link>
        //                     <Nav.Link className='mx-4' href="#features">Finest</Nav.Link>
        //                     <Nav.Link className='mx-4' href="#pricing">Pricing</Nav.Link>
        //                 </div>
        //             </Nav>
        //             <Nav className='mr-4 right-cart-section'>
        //                 <Nav.Link href="#" className='pr-5'><Cart /></Nav.Link>
        //                 <Nav.Link className='mt-2' eventKey={2}>
        //                     <Link to="/checkout">  Checkout <IoIosLogOut /></Link>
        //                 </Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>

        //     </Navbar>
        // </>
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
                    <Nav.Link><Cart /></Nav.Link>
                    <Nav.Link onClick={()=>navigate('/checkout')}>  Checkout <IoIosLogOut />
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>


    );
};

export default Header;
