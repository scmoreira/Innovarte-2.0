import React, { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";

import NavLinks from './NavLinks';
import Logout from './Logout';
import CartIcon from './CartIcon';

import { Toolbar, IconButton, Drawer, Link, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './navBar.styles';

const MobileNav = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();
    
    const getDrawerChoices = () => {
        return NavLinks.map(props => {
            return (
                <Link
                    {...{
                        ...props,
                        key: props.label,
                        component: RouterLink,
                        color: 'inherit',
                        style: { textDecoration: 'none' },
                    }}
                >
                    <MenuItem>{props.label}</MenuItem>
                </Link>
            );
        });
    };

    return (
        <Toolbar>
            <IconButton
                {...{
                    edge: 'end',
                    color: 'inherit',
                    'aria-label': 'menu',
                    'aria-haspopup': 'true',
                    onClick: () => setDrawerOpen(true)
                }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                {...{
                    anchor: 'right',
                    open: drawerOpen,
                    onClose: () => setDrawerOpen(false),
                }}
            >
                <div className= {classes.drawContainer}>
                    <div>{getDrawerChoices()}</div>
                    <Logout />
                    <CartIcon />
                </div>
            </Drawer>
        </Toolbar>
    );
};

export default MobileNav;
