import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from './images/logo.png'
import { IoIosLogOut } from 'react-icons/io';
import Cart from './Cart';
function Commonheader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary px-md-5 px-sm-2">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img src={img} style={{height:'100px', width:'120px'}} alt='logo'/>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex mx-auto">
                        <Form.Control
                            type="search"
                            style={{width:'400px'}}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" className='pr-5 pb-3'><Cart>1</Cart></Nav.Link>
                        <Nav.Link href="#">
                            checkout <IoIosLogOut/>
                        </Nav.Link>
                    </Nav>
                  
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Commonheader;