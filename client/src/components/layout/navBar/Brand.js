import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import Logo from '../../shared/images/logo.png';
import { Avatar, Button } from '@material-ui/core';

import useStyles from './navBar.styles';

const Brand = () => {

    const classes = useStyles();

    return (
        <div className={classes.navBrand}>
            <Avatar src={Logo} className={classes.brandLogo} />
            <Button
                className= {classes.brandLink}
                component={RouterLink}
                to='/'
            >
                innovarte
            </Button>
        </div>
    )
}

export default Brand;
