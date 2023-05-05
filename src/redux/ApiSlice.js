import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getApiData = createAsyncThunk("apidata", async () => {
  try {
    const response = await fetch(`https://fakestoreapi.com/users`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const ApiSlice = createSlice({
  name: "apiSlice",
  initialState: {
    apiData: [],
    isLoading: true,
    editFormValue: {},
  },
  reducers: {
    setApiData: (state, action) => {
      state.apiData = action.payload;
    },
    editApiData: (state, action) => {
      state.editFormValue = action.payload;
    },
  },
  extraReducers: {
    [getApiData.pending]: (state) => {
      state.isLoading = true;
    },
    [getApiData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.apiData = action.payload;
    },
    [getApiData.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setApiData, editApiData } = ApiSlice.actions;

export default ApiSlice.reducer;
