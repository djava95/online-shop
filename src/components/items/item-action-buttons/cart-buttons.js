import { React } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../services/slices/cart-slice';

import './action-buttons.scss';


export function AddMoreToCartBtn({ handleAddition }) {
    return (
        <button className='add-remove-button' onClick={handleAddition}>
            + 
        </button>
    )
}

export function RemoveFromCartBtn({ handleRemove }) {
    return (
        <button className='add-remove-button' onClick={handleRemove}>
            - 
        </button>
    )
}


