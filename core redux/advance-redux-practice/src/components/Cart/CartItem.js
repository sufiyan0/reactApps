import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cardAction } from '../../store/card';

const CartItem = (props) => {
  const { name, quantity, total, price ,description ,id } = props.item;

  const dispatch = useDispatch()

  const handelAddItem= () => {
    dispatch(cardAction.addItemToCart({
      id,description,price, name: name}))
  }
  
  const handelSubItem= () => {
    dispatch(cardAction.removeItemFromCart(id))
  }


  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${total}{' '}
          <span className={classes.itemprice}>(${price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handelSubItem}>-</button>
          <button onClick={handelAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
