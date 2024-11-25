import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const updatedItems = useSelector((state) => state.cartItem.items);
  console.log(updatedItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {updatedItems.map((item) => (
          <div key={item.id}>
            <CartItem item={item} />
          </div>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
