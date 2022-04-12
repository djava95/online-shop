import { React } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../services/slices/cart-slice';
import AddToCartBtn from './item-action-buttons/add-to-cart-btn';

import './shop-item.scss';

const ShopItem = ({ id, name, description, price }) => {

    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price
        }))
    };

    return (
        <div className='shop-item-cont'>
            <ul className='item-properties-list'>
                <li> <b> {name} </b></li>
                <li className='item-description'> {description} </li>
            </ul>
            <div className='price-and-btn-cont'>
                <span className='price-cont'>Price:  {price}$</span>
                <AddToCartBtn handleAddition={addToCartHandler} />
            </div>
        </div>
    )
}

export default ShopItem;