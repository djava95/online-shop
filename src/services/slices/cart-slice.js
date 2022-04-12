
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        cartSubtotal: 0,
        changed : false
    },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload;
            state.totalQuantity++;
            state.changed = true;
            state.cartSubtotal += newItem.price;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    quantity: 1
                });
            }
            else {
                existingItem.quantity++;
            }
        },
        updateCart(state, action) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
            state.cartSubtotal = action.payload.cartSubtotal;
        },
        
        removeItemFromCart(state, action) {
            const id = action.payload.id;
            state.totalQuantity--;
            state.changed = true;
            state.cartSubtotal -= action.payload.price;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else { existingItem.quantity-- };

        }
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;