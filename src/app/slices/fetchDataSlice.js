import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const fetchCityWeather = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getWeather: (state, action) => {
            return [...state, action.payload]
        },
    }

})

export const { getWeather } = fetchCityWeather.actions;


export default fetchCityWeather.reducer;


/** 
 * * Застрял, почему-то с фейтчингом данных, пробовал и RTK Queary, но получал 
 *  !<Object{...} is not a function>  
 *  * И данный момент не нашёл почему. 
*/