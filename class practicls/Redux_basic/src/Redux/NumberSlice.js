import { createSlice } from "@reduxjs/toolkit";

export const NumberSlice = createSlice({
    name: "NumberSlice",
    initialState: {
        number: 0
    },
    reducers: {
        // functions
        increment: (state) => {
            state.number += 1
        },
        decrement: (state) => {
            if (state.number > 0) {
                state.number -= 1
            }
        }
    }
})

export const { increment, decrement } = NumberSlice.actions

export default NumberSlice.reducer