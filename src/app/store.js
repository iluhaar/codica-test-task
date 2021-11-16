import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import citiesReducer from './slices/citiesSlice';
import fetchWeatherReducer from './slices/fetchDataSlice';

const store = configureStore({
    reducer: {
        cities: citiesReducer,
        fetchWeather: fetchWeatherReducer,
    },
});



export default store;
