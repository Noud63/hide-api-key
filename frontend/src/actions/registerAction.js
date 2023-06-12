import {
    REGISTER_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS
} from '../constants/registerConstants'

export const register = (user) => (dispatch) => {

    //dispatch({ type: REGISTER_REQUEST})

    dispatch({ type: REGISTER_SUCCESS, payload: user })

    //dispatch({ type: REGISTER_FAIL, payload: 'Something is wrong' })
    
}
