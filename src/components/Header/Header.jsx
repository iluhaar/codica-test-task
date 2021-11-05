import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { Link, NavLink } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#fff",
        marginBottom: "20px",
    },
    logo: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        minHeight:"80px",
        lineHeight: 1.5,
    },
}));

const Header = () => {



    const { header, logo } = useStyles();


    const displayDesktop = () => {
        return <Toolbar>{codicaLogo}</Toolbar>;
    };

    const codicaLogo = (
        <div>
            <div className={logo}>
                <NavLink to="/">
                <img src="https://www.codica.com/static/logo.3f55bcea.svg" alt="logo" />
                </NavLink>
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
