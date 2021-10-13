import { configureStore, Action } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import rootReducer, { RootType } from './rootReducer'

const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export default store