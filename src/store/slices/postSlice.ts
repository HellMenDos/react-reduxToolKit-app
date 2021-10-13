import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store'
import { PostInitialState, SearchData } from '../types/types';
import { API } from '../../const'

const initialState: PostInitialState = {
    loading: false,
    errors: false,
    post: undefined,
    data: [],
    searchData: []
};

export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    async (id: string, thunkAPI) => {
        let data = await fetch(`${API}/posts/${id}`)
        return await data.json()
    }
)

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (_, thunkAPI) => {
        let data = await fetch(`${API}/posts`)
        return await data.json()
    }
)



const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        searchPosts(state, action: PayloadAction<string>): void {
            state.searchData = state.data.filter((item) => item.title?.startsWith(action.payload))
        },
        sortPosts(state): void {
            state.searchData.reverse();
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
        }).addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.searchData = action.payload
        }).addCase(fetchPost.pending, (state, action) => {
            state.loading = true
        }).addCase(fetchPost.fulfilled, (state, action) => {
            state.loading = false
            state.post = action.payload
        })
    }
});
export const { searchPosts, sortPosts } = postSlice.actions;

export default postSlice.reducer

