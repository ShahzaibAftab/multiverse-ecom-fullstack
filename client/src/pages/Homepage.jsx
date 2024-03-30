import React, { useState } from 'react'
import Header from '../components/Header'
import Category from '../components/Category';
import img from '../components/images/smartwatch.png'
import img2 from '../components/images/mobilephone.png'
import img3 from '../components/images/laptop.png'
import img4 from '../components/images/tablet.png'
import Benefits from '../components/Benefits';
import Productcard from './../components/Productcard';
import Categoryblock from './../components/Categoryblock';
import Footer from './../components/Footer';
import sliderImg1 from '../components/images/c1.jpg'
import sliderImg2 from '../components/images/c2.jpg'
import sliderImg3 from '../components/images/c3.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useQuery } from 'react-query';
import getProduct from '../api/GetProduct';
import { Spinner } from 'react-bootstrap';

const Slider = React.lazy(() => import('../components/Slider'));
const categoryType = [
    {
        name: 'smartwatches',
        photo: img,
        number: 50
    },
    {
        name: 'Mobile Phones',
        photo: img2,
        number: 27
    },
    {
        name: 'Laptops',
        photo: img3,
        number: 34
    },
    {
        name: 'Tablets',
        photo: img4,
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
    const { isLoading, error, data } = useQuery({ queryKey: ['todos'], queryFn: getProduct })
    const [visibleItems, setVisibleItems] = useState(4);
    const translateValue = `-${startIndex * 25}%`; // Assuming each product takes 25% width

    if (isLoading) {
        return <div className='d-flex justify-content-center align-center vh-100'> <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner></div>
    }

    if (error) {
        return <div>Error fetching data: {error.message}</div>;
    }

    const handleSeeMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 4); // Increase visible items by 4
    };
    function handlePrevClick() {
        setStartIndex((prevIndex) => Math.max(0, prevIndex - 4));
    }
    const handleNextClick = () => {
        const newStartIndex = Math.min(startIndex + 1, productData.length - 4);
        setStartIndex(newStartIndex);
    };

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
                {data?.slice(0, visibleItems).map((dataObj, index) => (
                    <Productcard key={index} data={dataObj} />
                ))}
            </div>
            {data && visibleItems < data.length && (
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-warning text-white my-3' onClick={handleSeeMore}>See More</button>
                </div>
            )}
            {data && visibleItems >= data.length && (
                <div className='d-flex justify-content-center'>
                    <p className='text-muted'>End of Results</p>
                </div>
            )}
            <Categoryblock />

            <div className='container-fluid product-slider'>
                <div onClick={handlePrevClick} className='arrow' id='leftArrow'>
                    <FaArrowLeft />
                </div>

                <div className='product-container' style={{ transform: `translateX(${translateValue})` }}>
                    {data?.reverse().slice(startIndex, startIndex + 4).map((dataObj, index) => (
                        <Productcard key={index} data={dataObj} />
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