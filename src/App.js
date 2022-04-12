import { React, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData, sendCartData } from './services/actions/cart-actions';
import Welcome from './components/layout/welcome-page';
import NavBar from './components/layout/nav-bar';
import Shop from './components/layout/shop';
import ShoppingCart from './components/layout/shopping-cart';
import './App.scss';


function App() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);


  useEffect(() => {
    if (cart.changed){
      sendCartData(cart);
    }
    
  }, [cart])




  return (

    <div className='page-wrapper'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Welcome />}></Route>
          <Route path='/shop' element={<Shop />} />
          <Route path='/shopping-cart' element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
