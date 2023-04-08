import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: "UserSlice",
    initialState: {
        firstname: "Raj",
        lastname: "Moradiya"
    },
    reducers: {
        changeHandler: (state) => {
            state.firstname = "RD"
            state.lastname = "MORADIYA"
        }
    }

})

export const { changeHandler } = UserSlice.actions

export default UserSlice.reducer