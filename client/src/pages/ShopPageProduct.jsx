import React, { useState } from 'react'
import {

    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from "mdb-react-ui-kit";
import ReactStars from 'react-rating-stars-component';
import Product from './Product';
import { useNavigate } from 'react-router-dom';
const ShopPageProduct = (Props) => {
    const { data } = Props

    const [productData, setProductData] = useState(undefined)
    const navigate = useNavigate()

    const gotoCardPage = (data) => {
        setProductData(data)
        navigate('/view-product')
        return < Product data={productData} />
    }
    function generateRandomNumber() {
        return Math.floor(Math.random() * 50); // Generates a random number between 0 and 49
    }
    const randomNumber = generateRandomNumber();
    return (
        <>
            <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 my-5">
                <MDBCard onClick={() => gotoCardPage(data)}>
                    <div className="d-flex justify-content-between p-3">
                        <div
                            className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                            style={{ width: "35px", height: "35px" }}
                        >
                            <p className="text-white mb-0 small">x{randomNumber}</p>
                        </div>
                    </div>

                    {data.productImg && data.productImg.map((img, index) => (
                        <React.Fragment key={img._id}>
                            {index === 0 && (
                                <MDBCardImage
                                    src={img.img}
                                    position="top"
                                    alt="Laptop"
                                />
                            )}
                        </React.Fragment>
                    ))}
                    <MDBCardBody>
                        <div className="d-flex justify-content-between">
                            <p className="small">
                                <a href="#!" className="text-muted">
                                    Imported
                                </a>
                            </p>

                        </div>

                        <div className="d-flex justify-content-between mb-3">
                            <h5 className="mb-0">{data.productName}</h5>
                            <h5 className="text-dark mb-0">${data.price}</h5>
                        </div>

                        <div class="d-flex justify-content-between mb-2">
                            <p class="text-success mb-0">
                                Available
                            </p>
                            <div class="ms-auto text-warning">
                                <ReactStars
                                    count={5}
                                    value={data.rating}
                                    edit={false}
                                    isHalf={true}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                />
                            </div>
                        </div>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </>
    )
}

export default ShopPageProduct