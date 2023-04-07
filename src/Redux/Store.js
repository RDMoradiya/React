import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "./NumberSlice";

const Store = configureStore({
    reducer: {
        NumberSlice: NumberSlice
    }
})

export default Store
