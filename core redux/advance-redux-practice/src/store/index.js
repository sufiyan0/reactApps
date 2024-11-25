import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";
import cartSlice from "./card";


const store = configureStore({
  reducer: {
    cartItem: cartSlice,
    ui: uiSlice,
  },
});


export default store