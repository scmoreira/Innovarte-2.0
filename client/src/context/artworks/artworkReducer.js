
import {
    GET_AVAILABLE_ARTWORKS,
    GET_ARTWORKS_BY_ARTIST,
    GET_ARTISTS,
    GET_ARTWORKS_BY_TAG,
    SET_SOLD_ARTWORK,
    ERROR_MESSAGE
    // ARTWORK_ERROR
} from '../../types';

const ArtworkReducer = (state, action) => {
    switch (action.type) {
        case GET_AVAILABLE_ARTWORKS:
        case SET_SOLD_ARTWORK:
            return {
                ...state,
                artworks: action.payload
            }
        case GET_ARTWORKS_BY_ARTIST:
            return {
                ...state,
                artworks: action.payload
            }
        case GET_ARTISTS:
            return {
                ...state,
                artists: action.payload
            }
        case GET_ARTWORKS_BY_TAG: 
            return {
                ...state,
                artworks: action.payload
            }
        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default ArtworkReducer;