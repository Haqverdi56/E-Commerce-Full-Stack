import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const productSlice = createSlice({
    name: 'Products',
    initialState, 
    reducers: {
        add: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const { add } = productSlice.actions

export default productSlice.reducer

