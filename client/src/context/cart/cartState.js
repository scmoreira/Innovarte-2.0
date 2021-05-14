import React, { useReducer } from 'react';

import CartContext from './cartContext';
import CartReducer from './cartReducer';

import Service from '../../service';

import {
    GET_USER_CART,
    //ADD_ITEM,
    //DELETE_ITEM,
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
            return response.data.cart;
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <CartContext.Provider
            value={ {
                cartItems: state.cartItems,
                getUserCart
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
};

export default CartState;