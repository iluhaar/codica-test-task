import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { useGetCityWeather } from '../services/cityWeather';
import { useGetPokemonByNameQuery } from '../services/pokemon';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q=milan'

const Sample = () => {
    const [weatherData, setWeatherData] = useState({})
    let params = useParams();
    // const { data, error, isLoading } = useGetPokemonByNameQuery('milan')
    // const {data, error, isLoading } = useGetCityWeather('milan');
    // const { data, error, isLoading } = useGetCityWeather('charmander')


    const count = useSelector((state) => state.fetch.value)
    const dispatch = useDispatch()



    console.log(count)
    return (
        <div>
           
        </div>
    )
}

export default Sample
