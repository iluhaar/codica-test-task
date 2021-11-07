import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q=milan'

const initialState = {}


export const fetchSlice = createSlice({
    name:'fetching',
    initialState,
    
    reducers: {
        fetch: (state) => {
            debugger
            axios.get(URL)
            .then(res => [...state, res.data])

        }
    }
})

export const {fetch} = fetchSlice.actions

export default fetchSlice.reducer