import React, { useContext } from 'react';
import { Link as RouterLink } from "react-router-dom";

import AuthContext from '../../../context/auth/authContext';

import { Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import useStyles from './navBar.styles';

const Logout = () => {

    const authContext = useContext(AuthContext);
    const { authenticated, logout } = authContext;

    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

    return (
        <Button
            onClick={() => logout()}
            to='/'
            component={RouterLink}
            className= {trigger ? `${classes.logout} ${classes.active}`: classes.logout}
            hidden= {authenticated ? false : true }
        >
            Log Out
        </Button>
    );
};

export default Logout;