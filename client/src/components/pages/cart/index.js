import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../../context/auth/authContext';
import CartContext from '../../../context/cart/cartContext';

import Checkout from './Checkout';
import ItemCard from './ItemCard';
import { SubmitButton } from '../../shared/Button';
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';

import useStyles from './cart.styles';

const Cart = () => {

    const { user } = useContext(AuthContext);
    const { itemsInCart, getUserCart } = useContext(CartContext);

    const [items, setItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const classes = useStyles();

    const printCart = async () => {
        try {
            const response = await getUserCart(user._id);
            setItems(response);
            setTotalPrice(response.reduce((acc, curr) => acc + curr.price, 0));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (user) {
            printCart();
        }
        //eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (itemsInCart !== items) {
            printCart();
        }
        //eslint-disable-next-line
    }, [itemsInCart]);

    return (
        <div>
            <main className={ classes.root }>
                <h1>
                    Welcome
                    { user && <span capitalize='true'> { user.firstName } { user.lastName } </span> }
                </h1>
                { items.length === 0 &&
                    <div className={ classes.emptyCart }>
                        <p>No items...</p>
                        <Link to='/artworks'>Choose your artwork</Link>
                    </div>
                }
                <section className='row'>
                    <div className='col-md-7'>
                        <Checkout />
                    </div>
                    <div className='col-md-5'>
                        { items.length > 0 && items.map(item => <ItemCard key={ item._id } item={ item } />) }
                        <div className='summary'>
                            <h3>Total:  <EuroOutlinedIcon /> { totalPrice }</h3>
                            <SubmitButton text='Confirm' />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Cart;
