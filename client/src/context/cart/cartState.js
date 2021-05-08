import React, { useReducer } from 'react';

import CartContext from './cartContext';
import CartReducer from './cartReducer';

import Service from '../../service';

import {
    GET_USER_CART,
    GET_ONE_ARTWORK,
    ADD_ITEM,
    DELETE_ITEM,
} from '../../types';

const CartState = props => {

    const InitialState = {
        cartItems: [],
        artwork: null,
        itemToAdd: '',
        itemToDelete: '',
        message: null
    }

    const [state, dispatch] = useReducer(CartReducer, InitialState);

    const getUserCart = async userId => {
        try {
            const response = await Service.get(`/cart/${userId}`);
            dispatch({
                type: GET_USER_CART,
                payload: response.data.cart
            });
        } catch (error) {
            console.log(error)
        }
    }

    const getArtwork = async (id) => {
        try {
            const response = await Service.get(`/getOneArtwork/${id}`);
            dispatch({
                type: GET_ONE_ARTWORK,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <CartContext.Provider
            value={ {
                cartItems: state.cartItems,
                artwork: state.artwork,
                itemToAdd: state.itemToAdd,
                itemToDelete: state.itemToDelete,
                message: state.message,
                getUserCart,
                getArtwork,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartState;