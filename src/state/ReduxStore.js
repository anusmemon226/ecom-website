import { configureStore } from "@reduxjs/toolkit";
import AddToCartReducers from "./reducers/AddToCartReducers";
import TotalPriceReducer from "./reducers/TotalPriceReducer";
export default configureStore({
    reducer : {
        CartItems : AddToCartReducers,
        TotalPrice : TotalPriceReducer
    }
})