import React, { useState } from 'react'
import { AppBar, makeStyles, Toolbar, } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCity } from '../../app/slices/citiesSlice'
// import { useGetCityWeather } from '../../services/cityWeather.js';

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#fff",
        marginBottom: "20px",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80px",
        lineHeight: 1.5,
    },
}));

const Header = () => {
    const [city, setCity] = useState('')

    const dispatch = useDispatch();

    const { header, logo } = useStyles();

    const handleSumbit = (e) => {
        e.preventDefault();
        dispatch(addCity(city))
        setCity('')

    }

    const displayDesktop = () => {
        return <Toolbar>{codicaLogo}</Toolbar>;
    };

    const codicaLogo = (
        <div>
            <div className={logo}>
                <NavLink to="/">
                    <img src="https://www.codica.com/static/logo.3f55bcea.svg" alt="logo" />
                </NavLink>
                <form action="submit" onSubmit={handleSumbit}>
                    <label htmlFor="text"> Name</label>
                    <input type="text" value={city} placeholder='Enter city name..' onChange={(e) => setCity(e.target.value)} />
                </form>
            </div>
        </div>
    );


    return (
        <>
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </>
    )
}

export default Header
