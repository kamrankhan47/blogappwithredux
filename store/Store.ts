import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./BlogSlice";

const store = configureStore({
    reducer: {
        blogs: blogSlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch