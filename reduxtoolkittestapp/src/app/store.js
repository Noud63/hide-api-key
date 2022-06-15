import { configureStore } from '@reduxjs/toolkit'
import catReducer from '../features/data/getCatSlice'

export const store = configureStore({
    reducer: {
        cat: catReducer
    }
})