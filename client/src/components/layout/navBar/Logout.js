import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { Button } from '@material-ui/core';

import useStyles from './navBar.styles';

const isLoggedIn = true
const handleClick = () => alert('log out');

const Logout = () => {

    const classes = useStyles();

    return (
        <Button
            onClick={handleClick}
            to='/'
            component={RouterLink}
            className={ classes.logout}
            hidden= {isLoggedIn ? false : true }
        >
            Log Out
        </Button>
    );
};

export default Logout;