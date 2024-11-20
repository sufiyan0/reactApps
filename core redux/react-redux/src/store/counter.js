import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
    counter: 0,
    toggle: true,
  };
  
  const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      add(state) {
        state.counter++;
      },
      sub(state) {
        state.counter--;
      },
      toggle(state) {
        state.toggle = !state.toggle;
      },
      increase(state, action) {
        state.counter = state.counter + action.payload;
      },
    },
  });

  export const counterActions = counterSlice.actions;

  export default counterSlice.reducer;