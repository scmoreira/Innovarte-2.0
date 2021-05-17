import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...props }) => {
    const {
        authenticated,
        loading,
        authenticateUser } = useContext(AuthContext);

    useEffect(() => {
        authenticateUser();
        // eslint-disable-next-line
    }, []);

    return (
        <Route {...props} render={props => !authenticated && !loading ?
            <Redirect to='/login' /> :
            <Component {...props} /> }
        />
    );
}

export default PrivateRoute;