import { createSlice, current } from "@reduxjs/toolkit";

const initialState = []

export const productSlice = createSlice({
    name: 'products',
    initialState, 
    reducers: {
        add: (state, {payload}) => {
            const item = state.find((q) => q.id === payload.id);

            if (item) {
                item.count++;
              } else {
                state.push({...payload, count: 1});
            }
        },
        deleteById: (state,action) => {
            return state.filter(q => q.id != action.payload)
        }
    }
})


export const { add, deleteById } = productSlice.actions

export default productSlice.reducer;