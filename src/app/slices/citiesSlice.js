import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.push(action.payload)
        },
        removeCity: (state, action) => {
            state.filter(city => city !== action.payload)
        }
    }
});


export const { addCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;
