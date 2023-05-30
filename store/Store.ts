import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./BlogSlice";
import FavoritesSlice from "./FavoritesSlice";

const store = configureStore({
    reducer: {
        blogs: blogSlice,
        favorites: FavoritesSlice

    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch