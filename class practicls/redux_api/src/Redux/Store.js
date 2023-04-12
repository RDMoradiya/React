import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from "./ApiSlice";
import ApiSlice2 from './ApiSlice2'

const Store = configureStore({
    reducer: {
        ApiSlice: ApiSlice,
        ApiSlice2: ApiSlice2
    }
})

export default Store