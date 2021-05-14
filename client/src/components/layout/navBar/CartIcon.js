import React, { useContext, useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import AuthContext from '../../../context/auth/authContext';

import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import useStyles from './navBar.styles';

const CartIcon = () => {

    const { user } = useContext(AuthContext);
 
    const [items, setItems] = useState(0);
    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

    useEffect(() => {
        if (user) {
            setItems(user.cart.length);
        }
        return () => setItems(0);
    }, [user]);

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