import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import Service from '../../service/service';

import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    // LOGIN_SUCCESS,
    // LOGIN_ERROR,
    // LOGOUT,
    // GET_USER
} from '../../types';

const AuthState = props => {

    const initialState = {
        authenticated: null,
        user: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const signup = async user => {
        try {

            const response = await Service.post('api/signup', user);

            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data
            });

        } catch (error) {
            
            const alert = {
                message: error.respose.data.message,
                category: 'alert-error'
            }

            dispatch({
                type: SIGNUP_ERROR,
                payload: alert
            });
        }
    }

    

    return (
        <AuthContext.Provider
            value={{
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                signup
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;







// signup = user => this.api.post('/signup', user)
//     login = user => this.api.post('/login', user)
//     logout = () => this.api.post('/logout')
//     isLoggedIn = () => this.api.get('/loggedin')