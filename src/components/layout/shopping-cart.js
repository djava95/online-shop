import { React } from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../items/cart-item';

import './shopping-cart.scss';

export default function ShoppingCart() {

    const cartItems = useSelector(state => state.cart.items);
    const cartSubtotal = useSelector(state => state.cart.cartSubtotal);

    return (
        <div className='shopping-cart'>
            <h2>Shopping cart</h2>
            <div className='items-container'>
                {cartItems.map(item => <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                />)}
            </div>
            {!cartItems.length && <p className='empty-cart-message'> Your cart is empty </p>}
            <footer className='cart-subtotal'>
                Cart Subtotal: {cartSubtotal}$
            </footer>
        </div>
    )

} 