import { React } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import cartIcon from '.././utils/cart-icon.svg';

import './nav-link-buttons.scss';

export default function CartLinkButton() {

    const cartTotalCount = useSelector(state => state.cart.totalQuantity);

    return (
        <Link to={'/shopping-cart'} className="nav-link">
        <button className="cart-link-button">
            <img src={cartIcon} className='cart-icon' alt="cart icon"></img>
            <span>CART&nbsp;</span>
            <span>({cartTotalCount})</span>   
        </button>
        </Link>
    )

}


