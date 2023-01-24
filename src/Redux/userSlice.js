import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loggedIn: false,
    token: "",
    name : "",
    email: ""
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
        },
        setToken:(state,action) => {
            console.log(action.payload)
            state.token = action.payload
        },
        setName:(state,action) => { 
            console.log("this is action payload",action.payload)
            state.name = action.payload.name
        },
        setFullyLoggedIn: (state,action) => {
            console.log("this is action payload",action.payload)
            state.name = action.payload.name
            state.token = action.payload.token
            state.loggedIn = true;
            state.email = action.payload.email
        },
        setFullyLoggedOut: (state) => {
            state.name = ""
            state.token = ""
            state.loggedIn = false;
        }     
    }
})

// Action creators are generated for each case reducer function
export const { setLoggedIn, setLoggedOut,setToken, setName,setFullyLoggedIn,setFullyLoggedOut } = userSlice.actions

export default userSlice.reducer