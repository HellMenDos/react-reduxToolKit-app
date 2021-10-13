import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store'
import { FavouriteInitialState, Post } from '../types/types';
import { API } from '../../const'

const initialState: FavouriteInitialState = {
    favourite: [],
    searchFavourite: []
};



const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {
        addFavourite(state, action: PayloadAction<Post>) {
            state.favourite.push(action.payload)
            state.searchFavourite.push(action.payload)

            localStorage.setItem('favourite', JSON.stringify(state.favourite))
        },
        loadFavourite(state) {
            state.favourite = JSON.parse(localStorage.getItem('favourite') as string)
            state.searchFavourite = JSON.parse(localStorage.getItem('favourite') as string)
        },
        searchFavourite(state, action: PayloadAction<string>): void {
            state.searchFavourite = state.favourite.filter((item) => item.title?.startsWith(action.payload))
            localStorage.setItem('favourite', JSON.stringify(state.searchFavourite))
        },
        deleteFavourite(state, action: PayloadAction<number>): void {
            state.searchFavourite = state.favourite.filter((item) => item.id != action.payload)
            localStorage.setItem('favourite', JSON.stringify(state.searchFavourite))

        },
        sortFavourite(state): void {
            state.searchFavourite.reverse();
        }
    },
});
export const { addFavourite, searchFavourite, deleteFavourite, sortFavourite, loadFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer

