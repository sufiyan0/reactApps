import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../features/todoSlice/todoSlice';


export const store = configureStore({
    reducer: todoSlice
})