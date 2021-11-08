import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCity } from '../app/slices/citiesSlice'

const Sample = () => {

    const [city, setCity] = useState('')

    const count = useSelector((state) => state.cities)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log(count)

    }, [count])


    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(addCity(city))
        setCity('')
    }


    return (
        <div>
            <h3>To add City</h3>
            <form action="submit" onSubmit={handleSumbit}>
                <label htmlFor="text"> Name</label>
                <input type="text" value={city} placeholder='city' onChange={(e) => setCity(e.target.value)} />
            </form>
            {
                count.length > 0 ? (
                    count.map((c, i) => <div key={i}>{c} </div>)
                ) : (
                    <div>...</div>
                )
            }
        </div>
    )
}

export default Sample
