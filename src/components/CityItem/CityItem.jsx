import { Typography } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Header/Header';
const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q='


const CityItem = ({ city }) => {

    const [weatherData, setWeatherData] = useState({})

    let params = useParams();
    console.log(params)

    useEffect(() => {
        axios.get(`${URL}${params.cityName}`)
            .then(res => setWeatherData(res.data))
    }, [params])
    if (!weatherData || weatherData.length === 0) return <p>Loading...</p>
    return (
        <div className="city">
            <Header />
            <div className='cityItem'>
                <Typography variant="h3" component="h3">
                    {weatherData.name} {weatherData?.sys?.country}
                </Typography>
                <Typography variant="h5" component="h5">
                    Temp: {weatherData.main.temp}
                </Typography>
                <Typography variant="h5" component="h5">
                    Deg:    {weatherData.wind.deg}
                </Typography>
                <Typography variant="h5" component="h5">
                    Speed: {weatherData.wind.speed}
                </Typography>
            </div>
        </div>
    )
}

export default CityItem
