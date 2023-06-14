import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { getCatReducer } from './reducers/getCatReducer'
import { registerReducer } from './reducers/registerReducer'

//import { loadState, saveState } from './localStorage'

const reducer = combineReducers({
    cats: getCatReducer,
    users: registerReducer,
})

//const persistedState = loadState();

const initialState = {
    cats: { cat: [] },
    users: JSON.parse(localStorage.getItem('users')) || [],
}

const store = configureStore(
    {
        reducer,
        initialState
    }
)

// store.subscribe(() => {
//     saveState({
//         users: store.getState().users.users
//     });
// });

console.log(store.getState());

export default store
