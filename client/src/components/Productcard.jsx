import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
// import img from '../components/images/smartwatch.png'
import ReactStars from "react-rating-stars-component";
import { IoMdEye } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlices';
const Productcard = ({ data }) => {
    const [buttonColor, setButtonColor] = useState('btn btn-warning')
    const [buttonValue, setButtonValue] = useState('add to cart')
    // console.log('data', data)
    const dispatch = useDispatch()

    const addToCart = (e) => {
        dispatch(addItem({ name: data.productName, price: data.price }))
        setButtonColor('btn btn-success')
        setButtonValue('Added')
        setTimeout(() => {
            setButtonColor('btn btn-warning');
            setButtonValue('add to cart')
        }, 2000);
    }
    console.log(data)

    return (
        <>
            <Card style={{ width: '18rem' }} className='flex-wrap border-0 my-3 mx-2'>
                {data.productImg && data.productImg.map((img, index) => (
                    <React.Fragment key={img._id}>
                        {index === 0 && (
                            <Card.Img variant="top" src={img.img} className='product-img mx-auto' />
                        )}
                    </React.Fragment>
                ))}


                <div className="hot-tag">Hot</div>
                <div className="view-icon"><IoMdEye /></div>
                <Card.Body className='text-center'>
                    <Card.Text style={{ fontSize: '12px' }} className='text-muted text-decoration-none my-0'>{data.category}</Card.Text>
                    <Card.Title className='card-text mb-0'>{data.productName}</Card.Title>
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
                    {/* <input type='button' className={`${buttonColor} text-white`} value={buttonValue} onClick={(e) => dispatch(addItem({ name: data.name, price: data.price }))} /> */}
                    <input type='button' className={`${buttonColor} text-white`} value={buttonValue} onClick={(e) => addToCart(e)} />
                </Card.Body>
            </Card>
        </>

    )
}

export default Productcard
