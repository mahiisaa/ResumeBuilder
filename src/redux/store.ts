import { configureStore } from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux"
import type {TypedUseSelectorHook} from "react-redux"
import { AuthSlice } from "./features/authSlice";

export const store= configureStore(
    {
       reducer:{
       auth:AuthSlice.reducer
       }
    }
)

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
