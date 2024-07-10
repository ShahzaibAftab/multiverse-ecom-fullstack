import React from 'react';
import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
} from "mdb-react-ui-kit";
import ReactStars from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';

const ShopPageProduct = (Props) => {
    const { data } = Props;
    const navigate = useNavigate();

    const gotoCardPage = (data) => {
        navigate(`/view-product/${data._id}`);
    };

    function generateRandomNumber() {
        return Math.floor(Math.random() * 50); // Generates a random number between 0 and 49
    }
    const randomNumber = generateRandomNumber();

    return (
        <div style={{ flex: '0 1 calc(33.33% - 30px)', margin: '15px', maxWidth: '300px' }}>
            <MDBCard 
                onClick={() => gotoCardPage(data)} 
                style={{
                    transition: 'transform 0.2s',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    cursor: 'pointer',
                    height: '100%',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <div className="d-flex justify-content-between p-2">
                    <div
                        className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                        style={{ width: "30px", height: "30px" }}
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
                                style={{ height: '200px', width: '100%', objectFit: 'cover', borderRadius: '5px 5px 0 0' }}
                                alt="Product"
                            />
                        )}
                    </React.Fragment>
                ))}
                <MDBCardBody>
                    <div className="d-flex justify-content-between">
                        <p className="small text-muted">Imported</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <h5 className="mb-0">{data.productName}</h5>
                        <h5 className="text-dark mb-0">${data.price}</h5>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <p className="text-success mb-0">Available</p>
                        <div className="ms-auto text-warning">
                            <ReactStars
                                count={5}
                                value={data.rating}
                                edit={false}
                                isHalf={true}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                size={16}
                                activeColor="#ffd700"
                            />
                        </div>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default ShopPageProduct;
