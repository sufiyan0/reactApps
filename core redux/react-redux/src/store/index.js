import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const reducerFunction = (state = { counter: 0, toggle: true }, action) => {
//   if (action.type === "add") {
//     return {
//       counter: state.counter + 1,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       toggle: state.toggle,
//     };
//   }
//   if (action.type === "sub") {
//     return {
//       counter: state.counter - 1,
//       toggle: state.toggle,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       toggle: !state.toggle,
//     };
//   }
//   return state;
// };

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
