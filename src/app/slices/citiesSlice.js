import { createSlice } from "@reduxjs/toolkit";

const initialState = [];


export const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {
        addCity: (state, action) => {
            return [...state, action.payload]
        },
        removeCity: (state = initialState, action) => {
            return state.filter(city => city !== action.payload)
        }
    }
})




export const { addCity, removeCity} = citiesSlice.actions;

export default citiesSlice.reducer;
