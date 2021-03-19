import React, { useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import AuthContext from '../../../context/auth/authContext';

import { Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useStyles from './navBar.styles';

const NavLinks = () => {

    const authContext = useContext(AuthContext);
    const { authenticated } = authContext;

    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

    return (
        <>
            <Button
                aria-label= 'about'
                to='/#about'
                component= {Link}
                className= {trigger ? `${classes.active} ${classes.navLinks}` : classes.navLinks}
            >
                About
            </Button>
            <Button
                aria-label= 'how it works'
                to='/#howItWorks'
                component= {Link}
                className= {trigger ? `${classes.active} ${classes.navLinks}` : classes.navLinks}
            >
                How it works
            </Button>
            <Button
                aria-label= 'artworks'
                to='/artworks'
                component= {Link}
                className= {trigger ? `${classes.active} ${classes.navLinks}` : classes.navLinks}
            >
                Artworks
            </Button>
            {authenticated
                ?
                    <Button
                        aria-label= 'profile'
                        to='/profile'
                        component= {Link}
                        className={trigger ? `${classes.active} ${classes.navLinks}` : classes.navLinks}
                    >
                        My Profile
                    </Button> 
                :
                <>
                    <Button
                    aria-label= 'signup'
                    to='/signup'
                    component= {Link}
                    className={trigger ? `${classes.active} ${classes.navLinks}` : classes.navLinks}
                    >
                        Signup
                    </Button>
                    <Button
                        aria-label= 'login'
                        to='/login'
                        component= {Link}
                        className={trigger ? `${classes.active} ${classes.navLinks}` : classes.navLinks}
                    >
                        Login
                    </Button>
                </>
            }
        </>
    );
}

export default NavLinks;