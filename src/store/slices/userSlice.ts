import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { UserInitialState, User } from '../types/types';
import { API } from '../../const'

const initialState: UserInitialState = {
    users: [],
    loading: false
};

export const fetchUsers = createAsyncThunk(
    'users/fetchPosts',
    async (_, thunkAPI) => {
        let data = await fetch(`${API}/users`)
        return await data.json()
    }
)



const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        }).addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>): void => {
            state.loading = false
            state.users = action.payload
        })
    }
});


export default userSlice.reducer

