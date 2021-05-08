import {
    GET_USER_CART,
    GET_ONE_ARTWORK,
    ADD_ITEM,
    DELETE_ITEM
} from '../../types';

const CartReducer = (state, action) => {
    switch (action.type) {
        case GET_USER_CART:
            return {
                ...state,
                cartItems: action.payload
            };
        case GET_ONE_ARTWORK:
            return {
                ...state,
                artwork: action.payload
            }
        case ADD_ITEM:
            return {
                ...state
            };
        case DELETE_ITEM:
            return {
                ...state
            };
        default:
            return state;
    }
};

export default CartReducer;