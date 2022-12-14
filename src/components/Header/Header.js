import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='main-nav'>
            <div className='hdr-lft'>
                <a href=""><img src={logo} alt="" /></a>
            </div>
            <div className='hdr-rgt'>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;