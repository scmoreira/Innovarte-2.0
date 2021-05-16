import {
    UPDATE_CART
} from '../../types';

const CartReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_CART:
            return {
                ...state,
                itemsInCart: action.payload
            };
        default:
            return state;
    }
};

export default CartReducer;