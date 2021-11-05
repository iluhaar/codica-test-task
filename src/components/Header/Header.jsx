import React from 'react'
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";


const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#fff",
        marginBottom:"10px",
    },
    logo: {
        fontFamily: "Roboto, sans-serif",
        fontSize:"2rem",
        fontWeight: 600,
        lineHeight:1.5,
        color: "#dc3545",
        textAlign: "left",
    },
}));

const Header = () => {

    

    const { header, logo } = useStyles();


    const displayDesktop = () => {
        return <Toolbar>{codicaLogo}</Toolbar>;
    };

    const codicaLogo = (
        <Typography variant="h6" component="h1" className={logo}>
            :codica
        </Typography>
    );


    return (
        <header >
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    )
}

export default Header
