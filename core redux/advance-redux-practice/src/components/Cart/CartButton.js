import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const valuse = useSelector(state => state.cartItem.cartQuantity)
  console.log(valuse)  

  const toggleHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{valuse}</span>
    </button>
  );
};

export default CartButton;
