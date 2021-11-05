import React from 'react'
import cities from '../../dataSample/cities.json'
import CityItem from '../CityItem/CityItem'

const CitiesList = () => {

    console.log(cities)

    return (
        <div className="citiesList">
            {cities.map((city, i) => (
                <CityItem key={i} city={city}/>
            ))}
        </div>
    )
}

export default CitiesList
