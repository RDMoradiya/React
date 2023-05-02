import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import menuSlice from "./menuSlice";

const store = configureStore({
    reducer: {
        product: ProductSlice,
        menu: menuSlice,
    }
})

export default store