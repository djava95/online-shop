import { cartActions } from "../slices/cart-slice";




export const sendCartData = (cart) => {

    const sendRequest = async () => {
        await fetch('https://online-shop-7fb97-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
            method: 'PUT',
            body: JSON.stringify({
                items: cart.items || [],
                totalQuantity: cart.totalQuantity,
                cartSubtotal: cart.cartSubtotal
            }),
        });
        console.log(cart);
    }
    sendRequest();
}



export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://online-shop-7fb97-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
            const responseData = await response.json();
            return responseData;
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.updateCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity,
                cartSubtotal: cartData.cartSubtotal
            }));
            console.log(cartData);
        }
        catch (error) {
            alert(error);
        }
    }
}