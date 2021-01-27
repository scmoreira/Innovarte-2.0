import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import useStyles from './navBar.styles';

const CartIcon = () => {
 
    const classes = useStyles();
    const items = 2

    return (
        <IconButton
            className= {classes.cart}
            aria-label='cart'
            component={RouterLink}
            to='/cart'
        >
            <Badge
                badgeContent={items}
                className={classes.badge}
                color='secondary'
            >
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    );
};

export default CartIcon;