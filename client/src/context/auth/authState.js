import React, { useReducer } from 'react';

import AuthContext from './authContext';
import AuthReducer from './authReducer';

import Service from '../../service/service';

import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    GET_USER
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
            const response = await Service.post('/signup', user);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: response.data
            });
            authenticateUser();
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: SIGNUP_ERROR,
                payload: alert
            });
        }
    }

    const login = async user => {
        try {
            const response = await Service.post('/login', user);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            });
            authenticateUser();
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    const logout = async () => {
        const response = await Service.post('/logout');
        dispatch({
            type: LOGOUT,
            payload: response.data.message
        });
    }

    const authenticateUser = async () => {
        try {
            const response = await Service.get('/loggedin');
            dispatch({
                type: GET_USER,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR
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
                signup,
                login,
                logout,
                authenticateUser
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;