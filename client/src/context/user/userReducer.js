import {
    EDIT_PROFILE,
    GET_ALL_USER_ARTWORKS,
    GET_ON_SELL_ARTWORKS,
    GET_SOLD_ARTWORKS,
    GET_BUYED_ARTWORKS,
    ERROR
} from '../../types';

const UserReducer = (state, action) => {
    switch (action.type) {
        case EDIT_PROFILE:
            return {
                ...state,
            }
        case GET_ALL_USER_ARTWORKS:
            return {
                ...state,
                allArtworks: action.payload
        }
        case GET_ON_SELL_ARTWORKS:
            return {
                ...state,
                onSellArtworks: action.payload
        }
        case GET_SOLD_ARTWORKS:
            return {
                ...state,
                soldArtworks: action.payload
            }
        case GET_BUYED_ARTWORKS:
            return {
                ...state,
                buyedArtworks: action.payload
            }
        case ERROR:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}

export default UserReducer;