import React, {useState} from "react";
import Cart from '../Cart/Cart'
import Header from "../Layout/Header";
import Product from "../Products/Product";
import CartProvider from "../../store/CartProvider";
import { auth } from '../../firebase';  
import './Main.css'
import BackgroundAnimate from './BackgroundAnimate';
const Mainpage = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };
  
    // Signout function
    const logout = () => {
        auth.signOut();
    }
      
    return (
        <CartProvider>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
                <Product />
            </main>
            <div className='container'>
                <button className='button' onClick={logout}>Logout</button>
            </div>
        </CartProvider>
    );
}
  
export default Mainpage;