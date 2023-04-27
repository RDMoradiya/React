import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllProducts = createAsyncThunk('product/getProducts', async () => {
    try {
        const response = await axios.get(`http://localhost:8000/product/products`)
        return response.data.data.products
    } catch (error) {
        console.log('e', error);
    }
})

export const createProduct = createAsyncThunk("product/addproduct", async (formValue) => {
    try {
        const response = await axios.post(`http://localhost:8000/product`, formValue)
        const data = await response.data.data.products
        return data
    } catch (error) {
        console.log(error.response.data.message)
    }
})

export const deleteproduct = createAsyncThunk("product/deleteproduct", async (id, { dispatch }) => {
    try {
        const response = await axios.delete(`http://localhost:8000/product/${id}`)

        if (response.status === 200) {
            dispatch(getAllProducts())
        }
    } catch (error) {
        console.log(error)
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productList: [],
        loading: true,
        addProductLoading: false
    },
    reducers: {

    },
    extraReducers: {
        [getAllProducts.pending]: (state, action) => {
            state.loading = true;
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.productList = action.payload;
        },
        [getAllProducts.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})

export default productSlice.reducer