import { createSlice } from "@reduxjs/toolkit";

export const NumberSlice = createSlice({
    name: "NumberSlice",
    initialState: {
        number: 0,
    },
    reducers: {
        // functions
        increment: (state, action) => {
            state.number += Number(action.payload)
        },
        decrement: (state, action) => {
            if (state.number > 0) {
                state.number -= Number(action.payload)
            }
        }
    }
})

export const { increment, decrement } = NumberSlice.actions
export default NumberSlice.reducer