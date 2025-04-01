import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        tovars: []
    },
    reducers: {
        tovarQosh: (state, actions) => {
            state.tovars.push(actions.payload);
        },
        tovarOlipTashlash: (state, actions) => {
            state.tovars = state.tovars.filter(c => c.id !== actions.payload.id)
        }
    }
})

export const { tovarQosh, tovarOlipTashlash } = counterSlice.actions

export default counterSlice.reducer