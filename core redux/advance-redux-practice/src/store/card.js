import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalAmount: 0,
    cartQuantity: 0,
    isChange : false
    
};

// structure of food item = {
// itemId
// price
// quantity
// name
// totalPrice
// }


const cartSlice = createSlice({
    name: 'cardItem',
    initialState,
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload;
            const existingItam = state.items.find((item) => item.id === newItem.id)
            state.isChange = true
            if(!existingItam){
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity:1,
                    totalPrice:   newItem.price,
                    name :newItem.title,
                    description: newItem.description
                })
                state.cartQuantity = state.cartQuantity + 1
                state.totalAmount = state.totalAmount + newItem.price
                
                
            }else{
                existingItam.quantity++;
                existingItam.totalPrice = existingItam.totalPrice + newItem.price;
                state.totalAmount = state.totalAmount + newItem.price
            }
        },
        removeItemFromCart(state, action){
            const id = action.payload;
            const existingItam = state.items.find((item) => item.id === id )
            state.isChange = true
            if(existingItam.quantity === 1 ) {
                state.items =  state.items.filter(item => item.id !== id)
                state.cartQuantity = state.cartQuantity - 1
                state.totalAmount = state.totalAmount - existingItam.price
                
            }else {
                existingItam.totalPrice = existingItam.totalPrice - existingItam.price
                existingItam.quantity--;
                state.totalAmount = state.totalAmount - existingItam.price
            }
             
        },
        replaceCart(state, action){
            state.items = action.payload.items;
            state.totalAmount = action.payload.totalAmount;
            state.cartQuantity = action.payload.cartQuantity;
        }
    }
    
});


export const cardAction = cartSlice.actions
export default cartSlice.reducer;