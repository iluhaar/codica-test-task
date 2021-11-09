import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            state.push(action.payload)
        },
        removeCity: (state, action) => {
            debugger
            state.target.filter(t => t !== action.payload)
            debugger
        },
    }
});


export const { addCity, removeCity } = citiesSlice.actions;

export default citiesSlice.reducer;
