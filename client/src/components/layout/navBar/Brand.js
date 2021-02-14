import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import Logo from '../../shared/images/logo.png';
import { Avatar, Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import useStyles from './navBar.styles';

const Brand = () => {

    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

    return (
        <div className={classes.navBrand}>
            <Avatar src={Logo} className={classes.brandLogo} />
            <Button
                className= {trigger ? `${classes.brandLink} ${classes.active}`: classes.brandLink}
                component={RouterLink}
                to='/'
            >
                innovarte
            </Button>
        </div>
    )
}

export default Brand;
