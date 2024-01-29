import { FaTruck } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { MdLoyalty } from "react-icons/md";
import React from 'react';

const Benefits = () => {
  return (
    <>
      <div style={{ backgroundColor: 'radial-gradient(circle at 10% 20%, rgba(234, 249, 249, 0.67) 0.1%, rgba(239, 249, 251, 0.63) 90.1%);' }} className='d-flex justify-content-center align-center'>
        <div className=" tab-container">
          <div className="benefit-subcontainer">
            <FaTruck className="benefit-icon" />

            <h6 className="benefit-title">Free Shipping</h6>
          </div>
          <p className="benefit-text">Enjoy free delivery on shopping</p>
        </div>
        <div className=" tab-container">
          <div className="benefit-subcontainer">
            <MdLoyalty className="benefit-icon" />
            <h6 className="benefit-title">Exclusive Discounts</h6>
          </div>
          <p className="benefit-text">Get Discount on biggest sale of the year</p>
        </div>
        <div className=" tab-container">
          <div className="benefit-subcontainer">
            <AiOutlineDollar className="benefit-icon" />
            <h6 className="benefit-title">Loyalty Points</h6>
          </div>
          <p className="benefit-text">Earn Points on every Purchase</p>
        </div>
      </div>
    </>
  );
};

export default Benefits;
