import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../app/slices/citiesSlice';
const URL = 'https://api.openweathermap.org/data/2.5/weather?appid=56d61b45593dee9597decc258d63ce78&q='
const Sample = () => {

    const [city, setCity] = useState('')
    const [weatherData, setWeatherData] = useState({})
    const [searchCity,setSearchCity] = useState('Kyiv')
    const count = useSelector((state) => state.cities)
    const weather = useSelector((state) => state.fetching)
    const dispatch = useDispatch()


    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(addCity(city))
        setSearchCity(city)
        setCity('')

        
    }

    useEffect(() => {
        axios.get(`${URL}${searchCity}`)
            .then(res => setWeatherData(res.data))
        console.log(weatherData)
        console.log('weather: ', weather)
    }, [searchCity])





    return (
        <div>
            <h3>To add City</h3>
            <form action="submit" onSubmit={handleSumbit}>
                <label htmlFor="text"> Name</label>
                <input type="text" value={city} placeholder='city' onChange={(e) => setCity(e.target.value)} />
            </form>

            <p>{weatherData.name} </p>
            {/* {
                count.length > 0 ? (
                    count.map((c, i) => <div key={i}>{c} </div>)
                ) : (
                    <div>...</div>
                )
            } */}
        </div>
    )
}

export default Sample
