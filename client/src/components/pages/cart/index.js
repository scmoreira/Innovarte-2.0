import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../../context/auth/authContext';
import CartContext from '../../../context/cart/cartContext';

import Checkout from './Checkout';
import ItemCard from './ItemCard';
import { SubmitButton } from '../../shared/Button';
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import useStyles from './cart.styles';

const Cart = () => {

    const authContext = useContext(AuthContext);
    const cartContext = useContext(CartContext);

    const { user, authenticateUser } = authContext;
    const { cartItems, message, getUserCart } = cartContext;

    const classes = useStyles();

    useEffect(() => {
        authenticateUser();
        if (user) {
            getUserCart(user._id);
        }
        // eslint-disable-next-line
    }, []);  

    return (
        <div>
           <main className={classes.root}>
                <h1>
                    <SentimentVerySatisfiedOutlinedIcon fontSize='large' />
                    Welcome 
                    { user && <span className={ classes.spanUser }> { user.username }</span>}
                </h1>
                { cartItems.length === 0 &&
                    <div className={classes.emptyCart}>
                        <p>No items...</p>
                        <Link to='/artworks'>Choose your artwork</Link>
                    </div>
                }
                <section className='row'> 
                    <div className='col-md-5'>
                        <Checkout />
                    </div>
                    <div className='col-md-7'>
                        <ul >
                            {cartItems.map(item =>
                                <ItemCard key={item} item={{item}} />
                            )}
                            <div className='container-fluid'>
                                <div className='row'>
                                        <div className='col-9 col-lg-8'>
                                            <h5>Total:  <EuroOutlinedIcon /></h5>
                                        </div>
                                    <div className='col-3 col-lg-4'>
                                        <SubmitButton text='Confirm' />
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Cart;
