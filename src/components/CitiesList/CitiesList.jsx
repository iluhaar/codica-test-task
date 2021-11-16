import React, { useEffect, useState } from 'react';
import { Button, Card, makeStyles, Typography } from '@material-ui/core';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeCity } from '../../app/slices/citiesSlice';
import { getWeather } from '../../app/slices/fetchDataSlice';
import axios from 'axios'
// import { useGetCityWeather } from '../../services/cityWeather'
const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q='

const useStyles = makeStyles(() => ({
    cityCard: {
        padding: "10px"
    }
}))

const CitiesList = () => {
    const { cityCard } = useStyles();
    const [weatherData, setWeatherData] = useState({})
    const city = useSelector((state) => state.cities)
    const weather = useSelector((state) => state.weather)
    const dispatch = useDispatch()

    useEffect(() => {
        debugger
        axios.get(`${URL}${city}`)
            .then(res => {
                debugger
                getWeather(res.data)
                setWeatherData(res.data)
                debugger
            })
        debugger
    }, [city]);


    useEffect(() => {
        console.log('city: ', city)
        console.log('weather: ', weatherData)
        console.log('weatherSlice: ', weather)
    }, [city, weatherData, weather])
    
    // if (!weatherData || weatherData.main.length === 0) return <p>Loading...</p>

    return (
        <div className="citiesList">
            {city.map((city, i) => {
                return (
                    <div className="itemCity" key={i}>
                        <Card variant="outlined" className={cityCard} >
                            <Typography variant="h3" component="h3">{city}</Typography>
                            {/* <Typography variant="subtitle1" component="p">{weatherData.name}</Typography>
                            <Typography variant="subtitle1" component="p">{weatherData.main.temp}</Typography> */}
                            <Button size="small"> <Link to={`cities/${city}`}> More </Link> </Button>
                            <Button size="small" onClick={() => dispatch(removeCity(city))}>  Delete</Button>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}
export default CitiesList
