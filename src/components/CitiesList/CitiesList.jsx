import React, { useEffect, useState } from 'react'
import { Button, Card, makeStyles, Typography } from '@material-ui/core'
import { Link, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeCity } from '../../app/slices/citiesSlice'
import { useGetPokemonByNameQuery } from '../../services/pokemon'
// import { useGetCityWeather } from '../../services/cityWeather'

const useStyles = makeStyles(() => ({
    cityCard: {
        padding: "10px"
    }
}))

const CitiesList = () => {
    const { cityCard } = useStyles();
    const city = useSelector((state) => state.cities)
    const weather = useSelector((state) => state.fetchWeather)
    const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
    const dispatch = useDispatch()
    
    // const { data, error, isLoading } = useGetCityWeather('kyiv')


    useEffect(() => {
        const lsCity = localStorage.getItem('Kyiv')
        console.log('ls',lsCity)
    },[])


    useEffect(() => {
        console.log('city: ', city)
        console.log('weather: ', weather)
    }, [city, weather])

    return (
        <div className="citiesList">
            {city.map((city, i) => {
                return (
                    <div className="itemCity" key={i}>
                        <Card variant="outlined" className={cityCard} >
                            <Typography variant="h3" component="h3">{city}</Typography>
                            <Typography variant="subtitle1" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos nesciunt maiores est accusantium eaque eligendi? Repudiandae laudantium libero nostrum iure tenetur explicabo deserunt asperiores. Quis esse magni officiis iusto?</Typography>
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
