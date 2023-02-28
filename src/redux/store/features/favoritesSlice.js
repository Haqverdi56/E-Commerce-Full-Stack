import { createSlice, current } from "@reduxjs/toolkit";

const initialState = []

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState, 
    reducers: {
        addFav: (state, {payload}) => {
            const item = state.find((q) => q.id === payload.id);

            if (item) {
                return state               
              } else {
                state.push(payload);
            }
        },
        deleteFav: (state,action) => {
            return state.filter(q => q.id != action.payload)
        }
    }
})


export const { addFav, deleteFav } = favoriteSlice.actions

export default favoriteSlice.reducer;