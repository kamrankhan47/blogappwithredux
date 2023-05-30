import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


 interface FavoritesState {
    favorites: any[]

}
const initialState:FavoritesState = {

    favorites: []

}



const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
            console.log([...state.favorites]);
            
            
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
        }

    },
    extraReducers: {

    }
})

export const { addFavorite, removeFavorite } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;