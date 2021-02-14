import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '40px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.secondary,
        fontFamily: "'Allura', cursive",
        fontSize: '1.2em',
        fontWeight: 700,
        letterSpacing: '3px'
    },
    container: {
        textAlign: 'center',
    },
    footerText: {
        margin: '10px auto'
    }
}));

const Footer = () => {

    const classes = useStyle();

    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <p className= {classes.footerText}> &copy; {new Date().getFullYear()} Made by SCM </p>
            </div>
        </footer>
    );

}

export default Footer;