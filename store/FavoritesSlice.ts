import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface FavoritesState {
  favorites: any[];
}

const initialState: FavoritesState = {
  favorites: [],
}

const FavoritesSlice = createSlice({
  name: "favorites",
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      const newFavorite = action.payload;
      const isAlreadyAdded = state.favorites.some(item => item.id === newFavorite.id);
      
      if (isAlreadyAdded) {
        console.log("You already added this item to favorites!");
        // You can also display an alert or perform any other desired action
      } else {
        state.favorites.push(newFavorite);
        console.log([...state.favorites]);
      }
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addFavorite, removeFavorite } = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
