import { configureStore } from "@reduxjs/toolkit";
import NumberSlice from "./NumberSlice";
import UserSlice from "./UserSlice";

const Store = configureStore({
    reducer: {
        NumberSlice: NumberSlice,
        UserSlice: UserSlice,
    }
})

export default Store