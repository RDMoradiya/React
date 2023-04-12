import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ApiData = createAsyncThunk("ApiData", async () => {
    try {
        const resp = await fetch(`https://api.escuelajs.co/api/v1/products`)
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
})

export const getApiData = createAsyncThunk("getApiData", async (id) => {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        const Data = await response.json()
        return Data
    } catch (error) {
        console.log(error);
    }
})

export const ApiSlice = createSlice({
    name: "ApiSlice",
    initialState: {
        isLoading: true,
        apiData: [],
        getSingleApiData: {},
    },
    reducers: {
        //functions
    },
    extraReducers: {
        [ApiData.pending]: (state, action) => {
            state.isLoading = true
        },
        [ApiData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.apiData = action.payload
        },
        [ApiData.rejected]: (state, action) => {
            state.isLoading = false
        },
        [getApiData.pending]: (state, action) => {
            state.isLoading = true
        },
        [getApiData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.getSingleApiData = action.payload
        },
        [getApiData.rejected]: (state, action) => {
            state.isLoading = false
        },
    }
})

export default ApiSlice.reducer