import React, { useState, useEffect } from "react";
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
import { Button, Navbar, Form, Nav, FormControl } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { addItem, desQuantity, removeItem } from "../redux/slices/cartSlices";
import axiosInstance from "../utils/AxiosInstance";

const Header = () => {
  const dispatch = useDispatch();
  const checkoutItems = useSelector((state) => state.cart);
  const total = checkoutItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [displayCart, setDisplayCart] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false); // State for loading indicator

  const navigate = useNavigate();

  const showCart = () => {
    setDisplayCart(true);
  };

  const hideCart = () => {
    setDisplayCart(false);
  };

  const handleSearch = async () => {
    setLoading(true); // Set loading to true before making API call
    try {
      const response = await axiosInstance.get(`/api/product/search-product-by-name/${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    } finally {
      setLoading(false); // Set loading to false after API call completes
    }
  };

  // Effect to clear search results when clicking anywhere on the page
  useEffect(() => {
    const handleClickOutside = () => {
      setSearchResults([]); // Clear search results
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="justify-content-between px-4 shadow"
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
          background: "#2A8EAD",
        }}
      >
        <Navbar.Brand className=" text-white">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className=" text-white" onClick={() => navigate("/")}>
              <b>Home</b>
            </Nav.Link>
            <Nav.Link className=" text-white" onClick={() => navigate("/shop")}>
              <b>Shop</b>
            </Nav.Link>
            <Nav.Link className=" text-white">
              <b>Contact</b>
            </Nav.Link>
          </Nav>
          <Form inline className="d-flex mx-auto" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              style={{ minWidth: "550px" }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-info text-white border-muted" onClick={handleSearch}>Search</Button>
          </Form>
          <Nav>
            <Nav.Link
              className=" text-white"
              onMouseEnter={showCart}
              onMouseLeave={hideCart}
            >
              <b>
                {" "}
                <Cart />
              </b>
            </Nav.Link>
            <Nav.Link className=" text-white" onClick={() => navigate("/checkout")}>
              {" "}
              <b>
                {" "}
                Checkout <IoIosLogOut />
              </b>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* LOADER */}
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {/* SEARCH RESULTS */}
      {searchResults.length > 0 && (
        <div className="my-auto" style={{ display: 'flex', justifyContent: 'center' }}>
          <section style={{ backgroundColor: '#f7f7f7', position: "absolute", zIndex: 1000, borderRadius: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }} className="pt-5 mt-2 tablet search-results-container">
            <MDBContainer>
              <MDBRow className="justify-content-center">
                {searchResults.map((product) => (
                  <MDBCol key={product._id} md="4" lg="3" className="mb-4">
                    <MDBCard >
                      <MDBCardImage
                        src={product.productImg[0]?.img}
                        alt="Product"
                        style={{ height: "150px", width: "150px", objectFit: "cover" }}
                      />
                      <MDBCardBody>
                        <MDBTypography tag="h5">{product.productName}</MDBTypography>
                        <MDBTypography tag="h6" className="text-muted">${product.price}</MDBTypography>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))}
              </MDBRow>
            </MDBContainer>
          </section>
        </div>
      )}

      {/* CART */}
      {displayCart && (
        <section
          className="container-fluid cart-container"
          style={{ position: "absolute", zIndex: 1000 }}
        >
          <MDBContainer className="py-1">
            <MDBRow className="justify-content-center justify-content-md-end">
              <MDBCol
                xs="12"
                md="5"
                style={{
                  backgroundColor: "#dce8ee",
                  padding: "10px",
                  borderRadius: "6px",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <MDBTypography tag="h6" className="fw-normal mb-0 text-black">
                    Shopping Cart
                  </MDBTypography>
                  <Button
                    className="btn btn-danger py-1 px-3"
                    onClick={() => setDisplayCart(false)}
                  >
                    X
                  </Button>
                </div>
                {checkoutItems.map((obj) => (
                  <MDBCard
                    key={obj.key}
                    className="rounded-3 mb-4 d-flex"
                    style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" }}
                  >
                    <MDBCardBody className="d-flex p-4">
                      <MDBRow className=" d-flex justify-content-between align-items-center">
                        <MDBCol
                          className="d-flex justify-content-center"
                          md="3"
                          lg="3"
                          xl="3"
                        >
                          <MDBCardImage
                            className="rounded-3"
                            fluid
                            style={{ height: "50px", width: "50px" }}
                            src={obj.img.img}
                            alt="Cotton T-shirt"
                          />
                        </MDBCol>
                        <MDBCol
                          className="d-flex justify-content-center"
                          md="3"
                          lg="3"
                          xl="3"
                        >
                          <p className="small fw-normal mb-2">{obj.name}</p>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          lg="2"
                          xl="2"
                          className="d-flex align-items-center justify-content-center"
                        >
                          <button
                            type="button"
                            className="btn btn-primary my-0 py-0"
                            onClick={() =>
                              dispatch(
                                desQuantity({
                                  name: obj.name,
                                  price: obj.price,
                                })
                              )
                            }
                          >
                            -
                          </button>
                          <span className="px-2">{obj.quantity}</span>
                          <button
                            type="button"
                            className="btn btn-primary py-0"
                            onClick={() =>
                              dispatch(
                                addItem({ name: obj.name, price: obj.price })
                              )
                            }
                          >
                            +
                          </button>
                        </MDBCol>
                        <MDBCol
                          md="3"
                          lg="2"
                          xl="2"
                          className="offset-lg-1 d-flex justify-content-center"
                        >
                          <MDBTypography tag="h5" className="mb-0 small">
                            <span
                              className="text-success"
                              style={{ fontWeight: "1000" }}
                            >
                              $
                            </span>
                            {obj.price}
                          </MDBTypography>
                        </MDBCol>
                        <MDBCol md="1" lg="1" xl="1" className="text-center">
                          <a
                            className="text-danger"
                            style={{ cursor: "pointer" }}
                            onMouseOver={(e) => e.target.style.color = 'black'}
                            onMouseOut={(e) => e.target.style.color = ''}
                            onClick={() => dispatch(removeItem(obj._id))}
                          >
                            <MDBIcon fas icon="trash text-danger" size="lg" />
                          </a>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                ))}
                <div className="d-flex justify-content-between">
                  {total === 0 ? (
                    <p className="text-muted">Cart is Empty</p>
                  ) : (
                    <span>
                      <h6>
                        Total:{" " + total}
                        <span
                          className="text-success"
                          style={{ fontWeight: "1000" }}
                        >
                          $
                        </span>
                      </h6>{" "}
                    </span>
                  )}

                  <Link to="/checkout">
                    <MDBBtn color="muted" size="sm">
                      Checkout <IoIosLogOut className="text-danger" />
                    </MDBBtn>
                  </Link>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      )}
    </>
  );
};

export default Header;
