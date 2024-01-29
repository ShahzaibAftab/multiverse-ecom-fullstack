import React from 'react'
import Card from 'react-bootstrap/Card';
import img from '../components/images/smartwatch.png'
import ReactStars from "react-rating-stars-component";
import { IoMdEye } from "react-icons/io";
const Productcard = ({ data }) => {
    console.log('data', data)
    return (
        <>
            <Card style={{ width: '18rem' }} className='flex-wrap border-0 my-3 mx-2'>
                <Card.Img variant="top" src={data.photo} className='product-img mx-auto' />
                <div className="hot-tag">Hot</div>
                <div className="view-icon"><IoMdEye /></div>
                <Card.Body className='text-center'>
                    <Card.Text style={{ fontSize: '12px' }} className='text-muted text-decoration-none my-0'>{data.category}</Card.Text>
                    <Card.Title className='card-text mb-0'>{data.name}</Card.Title>
                    <div className='d-flex justify-content-center'>
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
                    <Card.Text className='text-muted text-decoration-none'>
                        {data.price} <span className='text-success' style={{ fontWeight: '1000' }}>$</span>
                    </Card.Text>
                    <input type='button' className='btn btn-warning text-white' value='add to cart' />
                </Card.Body>
            </Card>

            {/* <Card style={{ width: '18rem' }} className=' border my-3 mx-2'>
                <div className='card-flex'>
                    <div className='product-hover-price text-muted' style={{ fontSize: '13px' }}>2000 <span className='text-success' style={{ fontWeight: '1000' }}>$</span></div>
                    <Card.Img variant="top" src={img} className='product-hover-img mx-auto' />
                    <Card.Body className='text-center'>
                        <Card.Text className='text-muted text-decoration-none mb-0 small-text'>
                            Category
                        </Card.Text>
                        <Card.Title className='card-hover-text mb-0 mt-0'>Smartwatch</Card.Title>
                        <input type='button' value='add to cart' className='btn btn-primary'></input>
                    </Card.Body>
                </div>
            </Card> */}
        </>

    )
}

export default Productcard
