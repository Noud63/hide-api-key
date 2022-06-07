import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { getCatReducer } from './reducers/getCatReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    getCat: getCatReducer
})

const initialState = {
    cat: []
}
const middleware = [thunk]

const store = configureStore(
    { reducer },
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store