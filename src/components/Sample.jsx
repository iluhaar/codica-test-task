import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useGetCityWeather } from '../services/cityWeather';

const URL = 'http://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q=milan'

const Sample = () => {
    const [weatherData, setWeatherData] = useState({})
    let params = useParams();

    // const {data, error, isLoading } = useGetCityWeather('milan');
    const { data, error, isLoading } = useGetCityWeather('charmander')

    useEffect(() => {
        axios.get(URL)
        .then( res => setWeatherData(res.data))
        // .then( res => console.log(res.data))
    
    })
    console.log(error)
    return (
        <div>
            This is a sample component {weatherData.name}
        </div>
    )
}

export default Sample
