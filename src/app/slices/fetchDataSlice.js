import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q='

const initialState = [];

export const fetchCityWeather = createSlice({
    name: 'fetchWeather',
    initialState,
    reducers: {
        fetchWeather: (state, action) => {
            debugger
            axios.get(`${URL}${action.payload}`)
                .then(res => { state.push(res.data) })
            debugger
        },
    }

})

export const { fetchWeather } = fetchCityWeather.actions;


export default fetchCityWeather.reducer;
