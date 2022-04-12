import { React } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../services/slices/cart-slice';
import { AddMoreToCartBtn, RemoveFromCartBtn } from './item-action-buttons/cart-buttons';
import './cart-item.scss';

const CartItem = ({ id, name, quantity, price }) => {

    const dispatch = useDispatch();
    const addToCartHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            name,
            price
        }))
    };

    const removeFromCartHandler = () => {
        dispatch(cartActions.removeItemFromCart({
            id,
            price
        }))
    };

    return (
        <div className='cart-item-cont'>
            <ul className='cart-item-properties'>
                <li> {name} </li>
                <li>Price: {price}$ </li>
                <li>Quantity: {quantity} </li>
                <li>Subtotal: {price * quantity}$ </li>
            </ul>
            <div className='buttons-cont'>
                <AddMoreToCartBtn handleAddition={addToCartHandler} />
                <RemoveFromCartBtn handleRemove={removeFromCartHandler} />
            </div>
        </div>
    )
}
export default CartItem;