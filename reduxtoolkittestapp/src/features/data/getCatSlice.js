import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cat: [],
}

export const catSlice = createSlice({
    name: 'cats',
    initialState,
    reducers: {
        getCat: (state) => {
            state.loading = true   // state.value++
        },
        gotCat: (state, action) => {
            state.loading = false
            state.cat = action.payload
        },
        noCat: (state, action) => {
            state.loading = false
            state.error = action.payload.message
        }
    }
})

export const { getCat, gotCat, noCat } = catSlice.actions
export default catSlice.reducer