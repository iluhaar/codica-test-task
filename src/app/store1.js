import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from './slices/fetchDataSlice'


const store = configureStore({
    reducer: {
        fetch: fetchReducer,
    },
})

export default store;
