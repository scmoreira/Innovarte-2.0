import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import NavLinks from './NavLinks';
import Logout from './Logout';
import CartIcon from './CartIcon';

import { Toolbar, IconButton, Drawer, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useStyles from './navBar.styles';

const MobileNav = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();
    const trigger = useScrollTrigger({ threshold: 100 });
    const getDrawerChoices = () => {
        return NavLinks.map(props => {
            return (
                <Link
                    {...{
                        ...props,
                        key: props.label,
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
                <MenuIcon
                    className={trigger ? classes.active : classes.menuIcon} 
                />
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
                    <CartIcon />
                    <Logout />
                </div>
            </Drawer>
        </Toolbar>
    );
};

export default MobileNav;
