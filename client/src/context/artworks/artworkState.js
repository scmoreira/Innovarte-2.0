import React, { useReducer } from 'react';

import Service from '../../service/service';

import ArtworkContext from './artworkContext';
import ArtworkReducer from './artworkReducer';

import {
    GET_ALL_ARTWORKS,
    GET_AVAILABLE_ARTWORKS,
    GET_ONE_ARTWORK,
    GET_ARTIST_ARTWORKS,
    GET_ARTWORKS_BY_TAG,
    SET_SOLD_ARTWORK,
    ADD_ARTWORK,
    EDIT_ARTWORK,
    DELETE_ARTWORK,
    ARTWORK_ERROR
} from '../../types';

const ArtworkState = props => {

    const initialState = {
        artworks: [],
        artworksOnSell: [],
        artwork: null,
        message: null
    }

    const [state, dispatch] = useReducer(ArtworkReducer, initialState);

    const getAllArtworks = async () => {
        try {
            const response = await Service.get('/api/getAllArtworks');
            dispatch({ type: GET_ALL_ARTWORKS, payload: response.data });
        } catch (error) {
            const alert = {
                message: 'An error has ocurred',
                category: 'alert-error'
            };
            dispatch({
                type: ARTWORK_ERROR,
                payload: alert
            });
        }
    }

    const getArtworksOnSell = async () => {
        try {
            const response = await Service.get('/api/getAvailableArtworks');
            dispatch({ type: GET_AVAILABLE_ARTWORKS, payload: response.data });
        } catch (error) {
            const alert = {
                message: 'An error has ocurred',
                category: 'alert-error'
            };
            dispatch({
                type: ARTWORK_ERROR,
                payload: alert
            });
        }
    }

    const getOneArtwork = async artworkId => {
        try {
            const response = await Service.get(`/api/getOneArtwork/${artworkId}`);
            dispatch({ type: GET_ONE_ARTWORK, payload: response.data });
        } catch (error) {
            const alert = {
                message: 'An error has ocurred. Please try again.',
                category: 'alert-error'
            };
            dispatch({
                type: ARTWORK_ERROR,
                payload: alert
            });
        }
    }


    return (
        <ArtworkContext.Provider
            value={{
                artworks: state.artworks,
                artworksOnSell: state.artworksOnSell,
                artwork: state.artwork,
                message: state.message,
                getAllArtworks,
                getArtworksOnSell,
                getOneArtwork
            }}
        >
            {props.children}
        </ArtworkContext.Provider>
    );
}

export default ArtworkState;