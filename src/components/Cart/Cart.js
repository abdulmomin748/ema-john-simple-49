import { faArrowRight, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
const Cart = ({cart}) => {
    return (
        <div>
            <h2 className='order-title'>Order Summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price:  ${}</p>
            <p>Total Shipping Charge: ${}</p>
            <p>Tax: ${}</p>
            <h2 className='grand-total'>Grand Total: ${}</h2>
            <div className='btn-cntlr-cart'>
                <button className='clear'>
                    <span>Clear Cart</span>
                    <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                </button>
                <button className='review'>
                    <span>Review Cart</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};





export default Cart;