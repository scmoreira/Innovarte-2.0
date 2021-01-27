import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import NavLinks from './NavLinks';
import CartIcon from './CartIcon';
import Logout from './Logout';

import { Button } from '@material-ui/core';
import useStyles from './navBar.styles';

const GetNavLinks = () => {

    const classes = useStyles();

    return NavLinks.map( props => {
        return (
            <Button
                {...{
                    ...props,
                    key: props.label,
                    component: RouterLink,
                    className: classes.navLinks,
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