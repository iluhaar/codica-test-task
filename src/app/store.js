import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import citiesReducer from './slices/citiesSlice';
import fetchWeatherReducer from './slices/fetchDataSlice'
import { pokemonApi } from '../services/pokemon';
// import { weatherApi } from '../services/cityWeather';
const store = configureStore({
    reducer: {
        cities: citiesReducer,
        fetchWeather: fetchWeatherReducer,
        // [weatherApi.reducerPath]: weatherApi.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(pokemonApi.middleware),
        // getDefaultMiddleware().concat(weatherApi.middleware),
});


setupListeners(store.dispatch);

export default store;
