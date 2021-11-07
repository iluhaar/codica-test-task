// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78' }),
    endpoints: (builder) => ({
    getCity: builder.query({
            query: (city) => `&q=${city}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCityWeather } = weatherApi