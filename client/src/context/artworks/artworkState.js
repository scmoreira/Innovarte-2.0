import React, { useReducer } from 'react';

import Service from '../../service';

import ArtworkContext from './artworkContext';
import ArtworkReducer from './artworkReducer';

import {
    GET_AVAILABLE_ARTWORKS,
    GET_ARTWORKS_BY_ARTIST,
    GET_ARTISTS,
    GET_ARTWORKS_BY_TAG,
    ERROR_MESSAGE
} from '../../types';

const ArtworkState = props => {

    const initialState = {
        artworks: [],
        artists: [],
        artwork: null,
        errorMessage: null,
        tagList: ['Painting', 'Sculpture', 'Drawing', 'Crafts', 'Photography', 'Other'],
        currencies: ['BTC', 'CHF', 'CNY', 'EUR', 'GBP', 'JPY', 'RUB', 'USD']
    };

    const [state, dispatch] = useReducer(ArtworkReducer, initialState);

    const getArtists = async () => {
        try {
            const response = await Service.get('/getArtists');
            dispatch({
                type: GET_ARTISTS,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    const getArtworksOnSell = async () => {
        try {
            const response = await Service.get('/getAvailableArtworks');
            dispatch({
                type: GET_AVAILABLE_ARTWORKS,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    const getArtworksByTag = async tag => {
        try {
            const response = await Service.get(`/getArtworksByTag/${tag}`);
            dispatch({
                type: GET_ARTWORKS_BY_TAG,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    const getArtworksByArtist = async artist => {
        try {
            const response = await Service.get(`/getArtworksByArtist/${artist}`);
            dispatch({
                type: GET_ARTWORKS_BY_ARTIST,
                payload: response.data
            });
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    const updateArtworkState = async artworkId => {
        try {
            await Service.put(`/artworkSold/${artworkId}`);
            await getArtworksOnSell();
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    const addNewArtwork = async artwork => {
        try {
            await Service.post('/newArtwork', artwork);
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    const editArtwork = async( artworkId, details) => {
        try {
            await Service.put(`/editArtwork/${artworkId}`, details);
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    const deleteArtwork = async artworkId => {
        try {
            await Service.delete(`/${artworkId}/deleteArtwork`);
        } catch (error) {
            const alert = {
                message: error.response.data.message,
            };
            dispatch({
                type: ERROR_MESSAGE,
                payload: alert
            });
        }
    };

    return (
        <ArtworkContext.Provider
            value={ {
                artworks: state.artworks,
                artists: state.artists,
                artwork: state.artwork,
                errorMessage: state.errorMessage,
                tagList: state.tagList,
                currencies: state.currencies,
                getArtworksOnSell,
                getArtworksByArtist,
                getArtists,
                getArtworksByTag,
                updateArtworkState,
                addNewArtwork,
                editArtwork,
                deleteArtwork
            } }
        >
            {props.children }
        </ArtworkContext.Provider>
    );
};

export default ArtworkState;