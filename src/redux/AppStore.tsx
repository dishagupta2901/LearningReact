import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const AppStore = configureStore({
    reducer:{
        Cart : cartReducer
    }
});

export default AppStore;