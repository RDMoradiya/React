import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: {
        firstname: "RD",
        lastname: "MORADIYA"
    },
    reducers: {
        //functions
        ChangeHandler: (state) => {
            state.firstname = "Raj"
            state.lastname = "Patel"
        }
    }
})

export const { ChangeHandler } = UserSlice.actions

export default UserSlice.reducer