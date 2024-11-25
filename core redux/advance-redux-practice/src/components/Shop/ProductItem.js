import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cardAction } from '../../store/card';

const ProductItem = (props) => {
  const { title, price, description , id} = props;
  const dispatch = useDispatch()
  const updatedValuse = useSelector(state => state.cartItem.items)

  const handelAddToCart = () => {

    dispatch(cardAction.addItemToCart({
      id,description,price,title
    }))



    
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={ handelAddToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
