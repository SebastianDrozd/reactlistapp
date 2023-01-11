import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setLoggedIn: (state) => {
            state.loggedIn = true
        },
        setLoggedOut: (state) => {
            state.loggedIn = false
        }   
    }
})

// Action creators are generated for each case reducer function
export const { setLoggedIn, setLoggedOut } = userSlice.actions

export default userSlice.reducer