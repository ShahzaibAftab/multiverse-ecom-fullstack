import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = ({ children }) =>   {
    return (
        <div className="cart-container">
            <div className="cart-content">
                {children}
            </div>
            <div className="cart-icon">
                <FaShoppingCart />
            </div>
        </div>
    );
};

export default Cart;
