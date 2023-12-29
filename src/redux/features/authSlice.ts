import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        UserLogedin:(state,action)=>{
            state=action.payload
        }
    }
})

export const { UserLogedin } = AuthSlice.actions;

// Other code such as selectors can use the imported `RootState` type
//export const selectCount = (state: RootState) => state.counter.value;

export default AuthSlice.reducer;