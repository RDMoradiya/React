import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ApiData = createAsyncThunk("ApiData", async () => {
    try {
        const resp = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await resp.json();
        return data
    } catch (error) {
        console.log(error);
    }
});

export const ApiSlice = createSlice({
    name: "ApiSlice",
    initialState: {
        apiData: [],
        isLoading: true,
    },
    reducers: {
        //functions
    },
    extraReducers: {
        [ApiData.pending]: (state) => {
            state.isLoading = true
        },
        [ApiData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.apiData = action.payload
        },
        [ApiData.rejected]: (state) => {
            state.isLoading = false
        },
    }
});

export default ApiSlice.reducer;
