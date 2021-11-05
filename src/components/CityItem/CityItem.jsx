import { Typography } from '@material-ui/core'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Header/Header';

const CityItem = ({ city }) => {

    let params = useParams();
    console.log(params)

    return (
        <div className="city">
            <Header />
            <div className='cityItem'>
                <Typography variant="h3" component="h3">
                    {params.cityName}
                </Typography>
                {/* <Typography variant="h5" component="h5">
                {city.country}
            </Typography> */}
            </div>
        </div>
    )
}

export default CityItem
