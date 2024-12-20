import { cardAction } from "./card";
import { uiActions } from "./ui-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-redux-firebase-3d8fe-default-rtdb.firebaseio.com/cart.json')

            if (!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.json()
            return data
        }

        try{
           const cardData = await fetchData()
           dispatch(cardAction.replaceCart({
            items: cardData.items || [],
            totalAmount: cardData.totalAmount,
            cartQuantity: cardData.cartQuantity,
            isChange : cardData.isChange
           }))
        }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: "error",
                  title: "Error ",
                  message: "Fetching Cart Data Failed",
                })
              );
        }
    }
}