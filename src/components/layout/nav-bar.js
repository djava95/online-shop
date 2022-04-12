import { React } from 'react';
import CartLinkButton from '../nav-link-buttons/cart-link-button';
import ShopLinkButton from '../nav-link-buttons/shop-link-button';


import './nav-bar.scss';

export default function NavBar () {
    return (
        <nav className='nav-bar'>
            <ShopLinkButton />
            <CartLinkButton />
        </nav>
    )
}