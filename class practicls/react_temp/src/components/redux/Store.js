import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import menuSlice from "./menuSlice";
import loginSlice from './loginSlice'

const store = configureStore({
    reducer: {
        product: ProductSlice,
        menu: menuSlice,
        login: loginSlice
    }
})

export default store