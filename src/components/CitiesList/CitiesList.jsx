import React from 'react'
import { Button, Card, makeStyles, Typography } from '@material-ui/core'
import { Link, Outlet } from 'react-router-dom'
import cities from '../../dataSample/cities.json'
import { useSelector } from 'react-redux'


const useStyles = makeStyles(() => ({
    cityCard: {
        padding: "10px"
    }
}))

const CitiesList = () => {
    const { cityCard } = useStyles();
    const count = useSelector((state) => state.cities)

    return (
        <div className="citiesList">
            {count.map((city, i) => {
                return (
                    <div className="itemCity" key={i}>
                        <Card variant="outlined" className={cityCard} >
                            <Typography variant="h3" component="h3">{city}</Typography>
                            <Typography variant="subtitle1" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos nesciunt maiores est accusantium eaque eligendi? Repudiandae laudantium libero nostrum iure tenetur explicabo deserunt asperiores. Quis esse magni officiis iusto?</Typography>
                            <Button size="small"> <Link to={`cities/${city}`}> More </Link> </Button>
                            <Button size="small" onClick={() => console.log(`${i}`)}>  Delete</Button>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default CitiesList


// {cities.map((city) => {
//     return (
//         <div className="itemCity" key={city.id}>
//             <Card variant="outlined" className={cityCard} >
//                 <Typography variant="h3" component="h3">{city.name}</Typography>
//                 <Typography variant="subtitle1" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dignissimos nesciunt maiores est accusantium eaque eligendi? Repudiandae laudantium libero nostrum iure tenetur explicabo deserunt asperiores. Quis esse magni officiis iusto?</Typography>
//                 <Button size="small"> <Link to={`cities/${city.name}`}> More </Link> </Button>
//                 <Button size="small" onClick={() => console.log(`${city.id}`)}>  Delete</Button>
//             </Card>
//         </div>
//     )
// })}