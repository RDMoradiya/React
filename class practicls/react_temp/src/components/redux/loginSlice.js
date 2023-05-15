import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk("login", async ({ values, navigate }, { dispatch }) => {
  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDMPti3kY1_6EbA9nHCzaaOQccFmoSSWw4`, values);
    const data = await response;
    if (data.status === 200) {
      dispatch(setLogin(true));
      navigate("/");
    }
  } catch (error) {
    alert(error.response.data.error.message);
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: false,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
