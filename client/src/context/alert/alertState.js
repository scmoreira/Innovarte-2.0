import React, { useReducer } from 'react';

import AlertReducer from './alertReducer';
import AlertContext from './alertContext';

import { SHOW_ALERT, HIDE_ALERT } from '../../types';

const AlertState = props => {

    const initialState = { alert: null };

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    const showAlert = message => {
        dispatch({
            type: SHOW_ALERT,
            payload: message.message
        });

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            });
        }, 5000);
    }

    return (
        <AlertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertState;
