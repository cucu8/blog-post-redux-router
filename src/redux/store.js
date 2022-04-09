import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice/postSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
    reducer: {
        postSlice,
        userSlice,
    }
});