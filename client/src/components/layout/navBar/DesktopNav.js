import React from 'react';

import NavLinks from './NavLinks';
import CartIcon from './CartIcon';
import Logout from './Logout';

const DesktopNav = () => {  
    return (
        <>
            <div>
                <NavLinks />
                <Logout />
            </div>
            <div>
                <CartIcon />
            </div>
        </>
    );
};

export default DesktopNav;