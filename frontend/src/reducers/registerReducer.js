import {
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../constants/registerConstants'

const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
}

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { loading: true };
        case REGISTER_SUCCESS:
            let user = action.payload
            return Array.isArray(user) ? { ...state, users: user, loading: false }:{ ...state, users: [...state.users, user], loading: false } ;
        case REGISTER_FAIL:
            return { loading: false, error: action.payload.message };
        default:
            return state;
    }
}