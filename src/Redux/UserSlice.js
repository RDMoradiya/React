import { createSlice } from "@reduxjs/toolkit";


export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: {
        firstname: '',
        lastname: '',
    },
    reducers: {
        //functions
        ChangeHandler: (state, action) => {
            const FirstName = action.payload.firstName
            const LastName = action.payload.lastName

            state.firstname = FirstName
            state.lastname = LastName

            localStorage.setItem("data", JSON.stringify([{ FirstName, LastName }]))
            // recent data erase y????
        }
    }
})

export const { ChangeHandler } = UserSlice.actions

export default UserSlice.reducer