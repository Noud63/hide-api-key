import {
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../constants/registerConstants'

export const registerReducer = (state = { users: [] }, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
            return { loading: true };
        case REGISTER_SUCCESS:
            let user = action.payload
            return { ...state, users: [...state.users, user], loading: false };
        case REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}