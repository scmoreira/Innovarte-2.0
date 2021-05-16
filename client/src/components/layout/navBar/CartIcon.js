import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import AuthContext from '../../../context/auth/authContext';
import CartContext from '../../../context/cart/cartContext';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import useStyles from './navBar.styles';

const CartIcon = () => {

    const { user } = useContext(AuthContext);
    const { itemsInCart, getItemsInCart } = useContext(CartContext);
 
    const [items, setItems] = useState(0);

    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

    const updateCart = async () => {
        try {
            const response = await getItemsInCart(user._id);
            setItems(response);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user) {
            updateCart();
        }
        return () => setItems(0);
        //eslint-disable-next-line
    }, [user, itemsInCart]);
    
    return (
        <IconButton
            className= { trigger ? `${classes.cart} ${classes.active}` : classes.cart}
            aria-label='cart'
            component={Link}
            to='/cart'
        >
            <Badge
                badgeContent={items}
                className={classes.badge}
                color='secondary'
            >
                <ShoppingCartOutlinedIcon />
            </Badge>
        </IconButton>
    );
};

export default CartIcon;