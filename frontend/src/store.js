import { combineReducers} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { getCatReducer } from './reducers/getCatReducer'
import { registerReducer } from './reducers/registerReducer'
import thunk from 'redux-thunk'
import { loadState, saveState } from './localStorage'

const reducer = combineReducers({
    cats: getCatReducer,
    users: registerReducer,
})

const persistedState = loadState();

const initialState = {
    cats: { cat: [] },
    users: {users:[]},
    persistedState
}

const store = configureStore(
    { reducer,
      initialState,
      middlewares: [thunk],
    }
)

store.subscribe(() => {
    saveState({
        users: store.getState().users
    });
});

console.log(persistedState)

export default store
