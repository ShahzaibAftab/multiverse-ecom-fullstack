import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
const Cart = () => {
    const items = useSelector(state => state.cart)
    console.log('items', items)
    return (
        <>
            <div className="cart-container">
                <div className="cart-content">
                    {items?.length}
                </div>
                <div className="cart-icon">
                    <FaShoppingCart />
                </div>
            </div>
        </>

    );
};

export default Cart;
