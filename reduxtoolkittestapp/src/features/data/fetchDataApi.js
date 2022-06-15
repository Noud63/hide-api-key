import { getCat, gotCat, noCat } from './getCatSlice'
import axios from 'axios'

const fetchDataApi = () => async (dispatch) => {
    dispatch(getCat())
    try {
        const response =  await axios.get('/api/test')
        console.log(response)
        dispatch(gotCat(response.data))
    } catch (error) {
        dispatch(noCat({message: error.message}))
    }
}

export default fetchDataApi
