import React, { useReducer } from 'react';

import CartContext from './cartContext';
import CartReducer from './cartReducer';
import Service from '../../service';

import {
    UPDATE_CART
} from '../../types';

const CartState = props => {

    const InitialState = {
        itemsInCart: 0
    }

    const [state, dispatch] = useReducer(CartReducer, InitialState);

    const getUserCart = async userId => {
        try {
            const response = await Service.get(`/cart/${userId}`);
            return response.data.cart;
        } catch (error) {
            // handle error
        }
    };

    const getItemsInCart = async (userId) => {
        try {
            const response = await Service.get(`/cart/${userId}`);
            dispatch({
                type: UPDATE_CART,
                payload: response.data.cart.length
            });
            return response.data.cart.length;
        } catch (error) {
            // handle error
        }
    };

    const addItemToCart = async (userId, artworkId) => {
        try {
            await Service.put(`/addToCart/${userId}/${artworkId}`);
            const items = await getItemsInCart(userId);
            dispatch({
                type: UPDATE_CART,
                payload: items + 1
            });
        } catch (error) {
            // handle error
        }
    };

    const removeItemFromCart = async (userId, artworkId) => {
        try {
            await Service.put(`/deleteFromCart/${userId}/${artworkId}`);
            const items = await getItemsInCart(userId);
            dispatch({
                type: UPDATE_CART,
                payload: items - 1
            });
        } catch (error) {
            // handle error
        }
    }

    return (
        <CartContext.Provider
            value={ {
                itemsInCart: state.itemsInCart,
                getUserCart,
                getItemsInCart,
                addItemToCart,
                removeItemFromCart
            } }
        >
            {props.children }
        </CartContext.Provider>
    );
};

export default CartState;