import {
    REGISTER_SUCCESS
} from '../constants/registerConstants'

export const register = (user) => (dispatch) => {
    dispatch({ type: REGISTER_SUCCESS, payload: user })
    localStorage.setItem('USERS', JSON.stringify(user))
    
}
