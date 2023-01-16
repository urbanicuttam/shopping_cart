import React from 'react'
import classes from './Header.module.css'

import shoppingImage from '../../assets/shopping_image.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
        <header className={classes.header}>
            <h1>Products</h1>
            <h4>HI!! {localStorage.getItem("name")}</h4>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={shoppingImage} alt='A table full of delcious food!' />
        </div>
      
    </>
  )
}

export default Header
