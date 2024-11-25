import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData } from "./store/cart-data";

let isInitial = true;

function App() {
  const cardVisible = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cartItem);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, []);

  useEffect(() => {
    if(cart.isChange){
      
   
    const fetchCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending Data ",
          message: "Sending Cart Data",
        })
      );

      const response = await fetch(
        "https://react-redux-firebase-3d8fe-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error);
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success ",
          message: "Data is successfully saved",
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }
   
      fetchCartData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error ",
            message: "Sending Cart Data Failed",
          })
        );
      });

    }
    
  }, [cart, dispatch]);
  return (
    <Layout>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      {cardVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
