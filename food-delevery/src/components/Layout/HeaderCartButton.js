import { useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [bumpButton , setBumpButton ] = useState(false)
  
  const cardCtx =  useContext(CartContext);
  const {items} = cardCtx
  
  const numberOfCardItems = cardCtx.items.reduce((currNumber , item) => {
    return currNumber + item.amount
  } , 0)

  const buttonClasses = `${classes.button} ${bumpButton ? classes.bump: ''}`

  useEffect(() => {

    if(items.length === 0 ){
      return;
    }
     setBumpButton(true);

    const timer =  setTimeout(() => {
      setBumpButton(false)
    }, 300);

    return () => {
      clearTimeout(timer)
    }


  },[items])

  return (
    <button className={buttonClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCardItems}</span>
    </button>
  );
};

export default HeaderCartButton;
