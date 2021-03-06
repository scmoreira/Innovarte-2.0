import React, { useReducer } from 'react';

import UserContext from './userContext';
import UserReducer from './userReducer';

import Service from '../../service';

import {
    EDIT_PROFILE,
    GET_ALL_USER_ARTWORKS,
    GET_ON_SELL_ARTWORKS,
    GET_SOLD_ARTWORKS,
    GET_BUYED_ARTWORKS,
    ERROR
} from '../../types';

const UserState = props => {

    const initialState = {
        allArtworks: [],
        onSellArtworks: [],
        soldArtworks: [],
        buyedArtworks: [],
        message: null
    };

    const [state, dispatch] = useReducer(UserReducer, initialState);

    const editProfile = async (userId, user) => {
        try {
            const response = await Service.put(`/editProfile/${userId}`, user);
            dispatch({
                type: EDIT_PROFILE,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR,
                payload: alert
            });
        }
    };

    const getAllUserArtworks = async userId => {
        try {
            const response = await Service.get(`/allUserArtworks/${userId}`);
            dispatch({
                type: GET_ALL_USER_ARTWORKS,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR,
                payload: alert
            });
        }
    };

    const getOnSellArtworks = async userId => {
        try {
            const response = await Service.get(`/onSellArtworks/${userId}`);
            dispatch({
                type: GET_ON_SELL_ARTWORKS,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR,
                payload: alert
            });
        }
    };

    const getSoldArtworks = async userId => {
        try {
            const response = await Service.get(`/soldArtworks/${userId}`);
            dispatch({
                type: GET_SOLD_ARTWORKS,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR,
                payload: alert
            });
        }
    };

    const getBuyedArtworks = async userId => {
        try {
            const response = await Service.get(`/buyedArtworks/${userId}`);
            dispatch({
                type: GET_BUYED_ARTWORKS,
                payload: response.data.buyed
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR,
                payload: alert
            });
        }
    }

    const updateBuyedArtworks = async (userId, artworkId) => {
        try {
            await Service.put(`/updateBuyedArtworks/${userId}/${artworkId}`);
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR,
                payload: alert
            });
        }
    };

    return (
        <UserContext.Provider
            value={ {
                userProfileDetails: state.userProfileDetails,
                allArtworks: state.allArtworks,
                onSellArtworks: state.onSellArtworks,
                soldArtworks: state.soldArtworks,
                buyedArtworks: state.buyedArtworks,
                message: state.message,
                editProfile,
                getAllUserArtworks,
                getOnSellArtworks,
                getSoldArtworks,
                getBuyedArtworks,
                updateBuyedArtworks
            } }
        >
            {props.children }
        </UserContext.Provider>
    );
};

export default UserState;