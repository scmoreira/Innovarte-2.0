import React, { useReducer } from 'react';

import Service from '../../service';

import ArtworkContext from './artworkContext';
import ArtworkReducer from './artworkReducer';

import {
    GET_AVAILABLE_ARTWORKS,
    GET_ARTWORKS_BY_ARTIST,
    GET_ARTISTS,
    GET_ARTWORKS_BY_TAG,
    ADD_ARTWORK,
    EDIT_ARTWORK,
    DELETE_ARTWORK,
} from '../../types';

const ArtworkState = props => {

    const initialState = {
        artworks: [],
        artists: [],
        artwork: null,
    };

    const [state, dispatch] = useReducer(ArtworkReducer, initialState);

    const getArtworksOnSell = async () => {
        try {
            const response = await Service.get('/getAvailableArtworks');
            dispatch({
                type: GET_AVAILABLE_ARTWORKS,
                payload: response.data
            });
        } catch (error) {
            // Crear alerta
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
            // Crear alerta
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
            // Crear alerta
        }
    };

    const getArtists = async () => {
        try {
            const response = await Service.get('/getArtists');
            dispatch({
                type: GET_ARTISTS,
                payload: response.data
            });
        } catch (error) {
            // Create alert
        }
    };

    const updateArtworkState = async artworkId => {
        try {
            await Service.put(`/artworkSold/${artworkId}`);
            await getArtworksOnSell();
        } catch (error) {
            // Crear alerta
        }
    };

    const addNewArtwork = async artwork => {
        try {
            await Service.post('/newArtwork', artwork);
        } catch (error) {
            // Crear alerta
        }
    };

    const editArtwork = async( artworkId, details) => {
        try {
            await Service.put(`/editArtwork/${artworkId}`, details);
        } catch (error) {
            // Crear alerta
        }
    };

    const deleteArtwork = async artworkId => {
        try {
            await Service.delete(`/${artworkId}/deleteArtwork`);
        } catch (error) {
            // Crear alerta
        }
    };

    return (
        <ArtworkContext.Provider
            value={ {
                artworks: state.artworks,
                artists: state.artists,
                artwork: state.artwork,
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