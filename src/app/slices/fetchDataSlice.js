import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q=milan'

const initialState = {}


export const fetchSlice = createSlice({
    name: 'fetching',
    initialState,
    reducers: {
        fetchWeather: (state) => {
            debugger
            axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q=milan`)
                .then(res => console.log(res.data))
        }
    }
})

export const { fetchWeather } = fetchSlice.actions

export default fetchSlice.reducer