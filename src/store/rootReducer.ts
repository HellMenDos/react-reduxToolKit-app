import { combineReducers } from '@reduxjs/toolkit'
import post from './slices/postSlice'
import favourite from './slices/favouriteSlice'

const rootReducer = combineReducers({
    post,
    favourite
})
export type RootType = ReturnType<typeof rootReducer>

export default rootReducer