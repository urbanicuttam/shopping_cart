// import React, {useState} from "react";
// import Cart from "./components/Cart/Cart";
// import Header from "./components/Layout/Header";
// import Product from "./components/Products/Product";
// import CartProvider from './store/CartProvider';

// function App() {
//   const [cartIsShown, setCartIsShown] = useState(false);

//   const showCartHandler = () => {
//     setCartIsShown(true);
//   };

//   const hideCartHandler = () => {
//     setCartIsShown(false);
//   };

  
//   return (
//     <CartProvider>
//       {cartIsShown && <Cart onClose={hideCartHandler} />}
//       <Header onShowCart={showCartHandler} />
//       <main>
//         <Product />
//       </main>
//     </CartProvider>
//   );
// }

// export default App;

import React from 'react';
import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from './components/Auth/Login'
import Mainpage from './components/Auth/Main';

function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Mainpage/> : <Login/>
  );
}
  
export default App;
