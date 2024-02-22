import React from 'react'
import AdminCanvas from '../components/AdminCanvas';
import AdminProductList from '../components/AdminProductList';

const Adminproductoperation = () => {
    return (
        <>
            <div className='addFlex'>
                <AdminCanvas />
                <AdminProductList />
            </div>
        </>
    )
}

export default Adminproductoperation
