
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

const ArtworkReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_ARTWORKS:
            return {
                ...state,
                artworks: action.payload
            }
            break;
        case GET_AVAILABLE_ARTWORKS:
            return {
                ...state,
                artworksOnSell: action.payload
            }
        case GET_ONE_ARTWORK:
            return {
                ...state,
                artwork: action.payload
            }
            break;    
        default:
            return state;
    }
}

export default ArtworkReducer;