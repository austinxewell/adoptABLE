import React, { useState } from 'react';
import cart from '../../assets/images/cart.png'
import './cart.css'
import { useStoreContext } from '../../utils/GlobalState';

function Cart () {
    const [state, dispatch] = useStoreContext();

    function removeFromCart(item) {
        console.log('deleting item')
    }

    return (
        <div className="cartMenu dropdown is-hoverable is-right">
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                <span>Cart</span>
                <span className="icon is-small">
                    <img src={cart} alt="cart icon"></img>
                </span>
                </button>
            </div>
            <div className="dropdown-menu mr-3" id="dropdown-menu2" role="menu">
                <div className="dropdown-content">
                <div className="dropdown-item dropMenu">
                    <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                </div>
                <hr className="dropdown-divider" />
                <div className="dropdown-item dropMenu">
                    <p>You simply need to use a <code>&lt;div&gt;</code> instead.</p>
                </div>
                <hr className="dropdown-divider" />
                <a href="#" className="dropdown-item dropMenu">
                    This is a link
                </a>
                <span
                className='dropMenu'
                role="img"
                aria-label="trash"
                onClick={() => removeFromCart()}
                >
                🗑️
                </span>
                <button className="button is-success dropMenu checkoutbutton">Checkout</button>
                </div>  
            </div>
        </div>
    )
};

export default Cart;