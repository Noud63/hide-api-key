import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import catReducer from '../features/data/getCatSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        cat: catReducer
    }
})