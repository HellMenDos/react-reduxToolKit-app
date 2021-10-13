import { combineReducers } from '@reduxjs/toolkit'
import post from './slices/postSlice'
import favourite from './slices/favouriteSlice'
import user from './slices/userSlice'

const rootReducer = combineReducers({
    user,
    post,
    favourite
})
export type RootType = ReturnType<typeof rootReducer>

export default rootReducer