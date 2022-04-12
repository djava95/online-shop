import React from "react";
import { Link } from "react-router-dom";

import './nav-link-buttons.scss';

export default function ShopLinkButton() {

    return (
        <Link to={'/shop'} className="nav-link">
            <button className="shop-link-button">
                <span>GO TO SHOP!</span>
            </button>
        </Link>
    )

}