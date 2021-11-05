import { Button, Card, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import cities from '../../dataSample/cities.json'


const useStyles = makeStyles(() => ({
    cityCard: {
        padding: "10px"
    }
}))

const CitiesList = () => {

    const { cityCard } = useStyles();

    return (
        <div className="citiesList">
            {cities.map((city) => {
                return (
                    <div className="itemCity" >
                        <Card variant="outlined" key={city.id} className={cityCard} >
                            <Typography variant="h3" component="h3">{city.name}</Typography>
                            <Typography variant="subtitle1" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos nesciunt maiores est accusantium eaque eligendi? Repudiandae laudantium libero nostrum iure tenetur explicabo deserunt asperiores. Quis esse magni officiis iusto?</Typography>
                            <Button size="small"> <Link to={`cities/${city.name}`}> More </Link> </Button>
                        </Card>
                    </div>
                )
            })}
            <Outlet />
        </div>
    )
}

export default CitiesList
