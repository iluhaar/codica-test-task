import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from './slices/fetchDataSlice'
import citiesReducer from './slices/citiesSlice'

const store = configureStore({
    reducer: {
        // fetch: fetchReducer,
        cities: citiesReducer
    },
})

export default store;
