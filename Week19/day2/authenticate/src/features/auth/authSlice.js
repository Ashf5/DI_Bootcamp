
import {createSlice} from '@reduxjs/toolkit';


const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null
    },
    reducers: {
        loginUser: (state, action) => {
            state.user = {name: action.payload.name, email: action.payload.email};
            state.isAuthenticated = true;
        },
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})

export default AuthSlice.reducer;
export const {loginUser, logoutUser} = AuthSlice.actions;