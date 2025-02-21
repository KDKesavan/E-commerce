// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './slices/productSlice';
// import cartReducer from './slices/cartSlice';
// import authReducer from './slices/authSlice';

// export const store = configureStore({
//   reducer: {
//     products: productReducer,
//     cart: cartReducer,
//     auth: authReducer,
//   },
// });


import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default store;
