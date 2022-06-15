import {
    GET_THAT_CAT,
    GOT_THAT_CAT,
    GOT_NO_CAT,
} from '../constants/catConstants'

export const getCatReducer = (state = {cat : []}, action) => {
   
    switch (action.type) {
        case GET_THAT_CAT:
            return { loading: true }
        case GOT_THAT_CAT:
            return { loading: false, cat: action.payload }
        case GOT_NO_CAT:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}