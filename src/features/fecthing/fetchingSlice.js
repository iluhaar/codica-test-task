import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const getPosts = createAsyncThunk(
    'fetchCityData',
    async (thunkAPI) => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts').then(
      (data) => data.json()
    )
    return res
  })


export const fetchingSlice = createSlice({
    name: 'fetching',
    initialState:{
        
    },
    reducer:{

    }
})