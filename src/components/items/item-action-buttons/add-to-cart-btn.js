import { React } from 'react';

import './action-buttons.scss';


export default function AddToCartBtn({ handleAddition }) {
    return (
        <button className='add-button' onClick={handleAddition}>
            Add to Cart 
        </button>
    )
}