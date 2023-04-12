import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ApiDataa = createAsyncThunk("ApiDataa", async () => {
    try {
        const resp = await fetch(`https://api.escuelajs.co/api/v1/products`)
        const Data = await resp.json()
        return Data
    } catch (error) {
        console.log(error)
    }
})

export const ApiSlice2 = createSlice({
    name: "ApiSlice2",
    initialState: {
        isLoading1: true,
        ApiData2: []
    },
    reducers: {
        //functions
    },
    extraReducers: {
        [ApiDataa.pending]: (state, action) => {
            state.isLoading1 = true
        },
        [ApiDataa.fulfilled]: (state, action) => {
            state.isLoading1 = false
            state.ApiData2 = action.payload
        },
        [ApiDataa.rejected]: (state, action) => {
            state.isLoading1 = false
        },
    }
})

export default ApiSlice2.reducer