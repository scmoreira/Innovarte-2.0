import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import { IconButton, Badge } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import useStyles from './navBar.styles';

const CartIcon = () => {
 
    const [items, setItems] = useState(1);
    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

    useEffect(() => {
        // revisar el context por si hay cambios
    }, []);

    return (
        <IconButton
            className= { trigger ? `${classes.cart} ${classes.active}` : classes.cart}
            aria-label='cart'
            component={RouterLink}
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