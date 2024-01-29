import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import img from './images/categoryblock1.png'

const Categoryblock = () => {
  return (
    <>
      {/* ADD BLOCK FOR MOBILE SCREEN */}
      <Row className=' mx-auto container-fluid d-flex justify-content-around'>
        <Col className='d-flex text-white block-border-2' xs={12} md={7}>
          <Col className='d-flex flex-column justify-content-center align-center flex-wrap' md={6} >
            <h1>Unleash with the 5G devices</h1>
            <p>We bring the best mobile phones that value your pocket, amazing discount on deals</p>
          </Col>
          <Col className='text-center' md={6}>
            <img src={img} alt='mobile Phones' />
          </Col>
        </Col>
        {/* FOR MOBILE SCREENS */}
        {/* <span className='my-2'></span> */}
        <Col className='d-flex bg-primary text-white block-border' xs={12} md={4}>
          <Col className='d-flex flex-column justify-content-center align-center flex-wrap' md={7} >
            <h3>Smart Devices</h3>
            <p>We value your money amazing</p>
          </Col>
          <Col className='text-center' md={5}>
            <img className='category-img-2' src={img} alt='mobile Phones' />
          </Col>
        </Col>
      </Row>

    </>
  )
}

export default Categoryblock
