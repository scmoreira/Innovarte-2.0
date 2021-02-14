import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

import NavLinks from './NavLinks';
import CartIcon from './CartIcon';
import Logout from './Logout';

import { Button } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useStyles from './navBar.styles';

const GetNavLinks = () => {

    const trigger = useScrollTrigger({ threshold: 100 });
    const classes = useStyles();

    return NavLinks.map( props => {
        return (
            <Button
                {...{
                    ...props,
                    key: props.label,
                    component: Link,
                    className: trigger ? `${classes.active} ${classes.navLinks}` : classes.navLinks
                }}
            >
                { props.label}
            </Button>
        );
    });
}

const DesktopNav = () => {  
    return (
        <>
            <div>
                <GetNavLinks />
                <Logout />
            </div>
            <div>
                <CartIcon />
            </div>
        </>
    );
};

export default DesktopNav;