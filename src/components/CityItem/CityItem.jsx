import { Button, Card, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const CityItem = ({ city }) => {

    console.log('city', city)

    return (
        <div className='cityItem'>
            <Card variant="outlined">
                <Typography variant="h3" component="h3">
                    {city.name}
                </Typography>
                <Typography variant="h5" component="h5">
                    {city.country}
                </Typography>
                <Typography variant="p" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos nesciunt maiores est accusantium eaque eligendi? Repudiandae laudantium libero nostrum iure tenetur explicabo deserunt asperiores. Quis esse magni officiis iusto?</Typography>
                <Button size="small"> <Link to={`city/${city.name}`}> More </Link> </Button>
            </Card>
        </div>
    )
}

export default CityItem
