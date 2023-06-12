import {
    GET_THAT_CAT,
    GOT_THAT_CAT,
    GOT_NO_CAT,
} from '../constants/catConstants'
import axios from 'axios'


const getCats = () => async (dispatch) => {

    try {
        dispatch({ type: GET_THAT_CAT })

        let res = await axios.get('/api/test')
        let data = res.data

        dispatch({
            type: GOT_THAT_CAT,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GOT_NO_CAT,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export default getCats