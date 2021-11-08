import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.push(action.payload)
        }
    }
});


export const { addCity } = citiesSlice.actions;

export default citiesSlice.reducer;
