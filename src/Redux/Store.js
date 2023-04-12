import { configureStore } from "@reduxjs/toolkit";
import ApiSlice from './ApiSlice'

const Store = configureStore({
    reducer: {
        ApiSlice: ApiSlice
    }
})

export default Store