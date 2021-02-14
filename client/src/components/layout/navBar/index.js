import React, { useState, useEffect } from 'react';

import Brand from './Brand';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import { AppBar, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import useStyles from './navBar.styles';

const Navbar = () => {

    const [mobileView, setMobileView] = useState(false);
    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();
    

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setMobileView(true)
                : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener('resize', () => setResponsiveness());
    }, []);

    return (
        <div className={classes.root}>
            <AppBar>
                <Toolbar className={trigger ? classes.toolbarActive : classes.toolbar }>
                    <Brand />
                    {mobileView ? <MobileNav /> : <DesktopNav />}
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    );
}

export default Navbar;