import React from 'react';

import Signup from './Signup';
import Login from './Login';

import Grid from '@material-ui/core/Grid';
import useStyles from './authForms.styles';

const AuthForms = () => {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Signup />
            <Login />
        </Grid>
    );
}

export default AuthForms;
