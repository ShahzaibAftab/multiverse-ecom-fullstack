import React, { useState } from 'react'
import Header from '../components/Header'
import Category from '../components/Category';
import img from '../components/images/smartwatch.png'
import Benefits from '../components/Benefits';
import Productcard from './../components/Productcard';
import Categoryblock from './../components/Categoryblock';
import Footer from './../components/Footer';
import sliderImg1 from '../components/images/c1.jpg'
import sliderImg2 from '../components/images/c2.jpg'
import sliderImg3 from '../components/images/c3.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const Slider = React.lazy(() => import('../components/Slider'));
const categoryType = [
    {
        name: 'smartwatches',
        photo: img,
        number: 50
    },
    {
        name: 'Mobile Phones',
        photo: img,
        number: 27
    },
    {
        name: 'Laptops',
        photo: img,
        number: 34
    },
    {
        name: 'Tablets',
        photo: img,
        number: 75
    },
];


const productData = [
    {
        name: 'smartwatches',
        photo: img,
        price: 50,
        category: 'watch',
        rating: 4
    },
    {
        name: 'smartwatches',
        photo: img,
        price: 50,
        category: 'watch',
        rating: 4
    },
    {
        name: 'Mobile Phones',
        photo: img,
        price: 27,
        category: 'watch',
        rating: 4.5
    },
    {
        name: 'Laptops',
        photo: img,
        price: 34,
        category: 'watch',
        rating: 3
    },

];


const Homepage = () => {


    
    const [startIndex, setStartIndex] = useState(0);
    const handlePrevClick = () => {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - 4));
    };
    const handleNextClick = () => {
        const newStartIndex = Math.min(startIndex + 1, productData.length - 4);
        setStartIndex(newStartIndex);
    };
    const translateValue = `-${startIndex * 25}%`; // Assuming each product takes 25% width

    return (
        <>
            <Header />
            
            <Slider prop1={sliderImg1} prop2={sliderImg2} prop3={sliderImg3} control={false} />
            <div className='d-flex justify-content-center'>
                {categoryType.map((category, index) => (
                    <Category key={index} data={category} />
                ))}
            </div>
            <Benefits />
            <div className='d-flex justify-content-center flex-wrap'>
                {
                    productData.map((dataObj, index) => (
                        <Productcard key={index} data={dataObj} />
                    ))
                }
            </div>
            <Categoryblock />

            <div className='container-fluid product-slider'>
                <div onClick={handlePrevClick} className='arrow' id='leftArrow'>
                    <FaArrowLeft />
                </div>

                <div className='product-container' style={{ transform: `translateX(${translateValue})` }}>
                    {productData.slice(startIndex, startIndex + 4).map((data, index) => (
                        <Productcard key={index} data={data} />
                    ))}
                </div>

                <div onClick={handleNextClick} className='arrow' id='rightArrow'>
                    <FaArrowRight />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Homepage