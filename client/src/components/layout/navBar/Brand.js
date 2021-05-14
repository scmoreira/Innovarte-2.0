import React from 'react';
import { Link } from "react-router-dom";

import Logo from '../../shared/images/logo.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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
                component={ Link}
                to='/'
            >
                innovarte
            </Button>
        </div>
    )
}

export default Brand;
