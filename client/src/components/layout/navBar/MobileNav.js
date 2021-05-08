import React, { useState } from 'react';

import NavLinks from './NavLinks';
import Logout from './Logout';
import CartIcon from './CartIcon';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useStyles from './navBar.styles';

const MobileNav = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

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
                    <NavLinks />
                    <CartIcon />
                    <Logout />
                </div>
            </Drawer>
        </Toolbar>
    );
};

export default MobileNav;
