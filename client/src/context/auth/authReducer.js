import {
    SIGNUP_SUCCESS,
    SIGNUP_ERROR,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    GET_USER
} from '../../types';

const AuthReducer = (state, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false
            }
        case SIGNUP_ERROR:
        case LOGIN_ERROR:
        case LOGOUT:
            return {
                ...state,
                authenticated: null,
                user: null,
                message: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default AuthReducer;