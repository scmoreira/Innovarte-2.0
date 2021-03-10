import React, { useReducer } from 'react';

import Service from '../../service/service';

import ArtworkContext from './artworkContext';
import ArtworkReducer from './artworkReducer';

import {
    GET_AVAILABLE_ARTWORKS,
    //GET_ONE_ARTWORK,
    GET_ARTWORKS_BY_ARTIST,
    GET_ARTISTS,
    GET_ARTWORKS_BY_TAG,
    // SET_SOLD_ARTWORK,
    // ADD_ARTWORK,
    // EDIT_ARTWORK,
    // DELETE_ARTWORK,
} from '../../types';

const ArtworkState = props => {

    const initialState = {
        artworks: [],
        artists: [],
        artwork: null,
    }

    const [state, dispatch] = useReducer(ArtworkReducer, initialState);

    const getArtworksOnSell = async () => {
        try {
            const response = await Service.get('/getAvailableArtworks');
            dispatch({ type: GET_AVAILABLE_ARTWORKS, payload: response.data });
        } catch (error) {
            // Crear alerta
        }
    }

    const getArtworksByArtist = async artist => {
        try {
            const response = await Service.get(`/getArtworksByArtist/${artist}`);
            dispatch({ type: GET_ARTWORKS_BY_ARTIST, payload: response.data });
        } catch (error) {
            // Crear alerta
        }
    }

    const getArtists = async () => {
        try {
            const response = await Service.get('/getArtists');
            dispatch({ type: GET_ARTISTS, payload: response.data });
        } catch (error) {
            // Create alert
        }
    }

    const getArtworksByTag = async tag => {
        try {
            const response = await Service.get(`/getArtworksByTag/${tag}`);
            dispatch({ type: GET_ARTWORKS_BY_TAG, payload: response.data });
        } catch (error) {
            // Crear alerta
        }
    }

    return (
        <ArtworkContext.Provider
            value={{
                artworks: state.artworks,
                artists: state.artists,
                artwork: state.artwork,
                getArtworksOnSell,
                getArtworksByArtist,
                getArtists,
                getArtworksByTag,
            }}
        >
            {props.children}
        </ArtworkContext.Provider>
    );
}

export default ArtworkState;