// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const key = '56d61b45593dee9597decc258d63ce78'
// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78` }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `&q=${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi