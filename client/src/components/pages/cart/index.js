import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../../context/auth/authContext';
import { Capitalize } from '../../shared/helpers';

import Checkout from './Checkout';
//import ItemCard from './ItemCard';
import { SubmitButton } from '../../shared/Button';
import EuroOutlinedIcon from '@material-ui/icons/EuroOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import useStyles from './cart.styles';

const Cart = () => {

    const authContext = useContext(AuthContext);
    const items = [];

    const classes = useStyles();

    const { user, authenticateUser } = authContext;

    useEffect(() => {
        authenticateUser();
        // eslint-disable-next-line
    }, []);

    if (!user) {
        return null;
    }

    const userName = Capitalize(user.username);

    return (
        <div>
           <main className={classes.root}>
                <h1><SentimentVerySatisfiedOutlinedIcon fontSize='large' /> Welcome { userName }</h1>
                {!items &&
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
                            {/* {items.map(item => 
                                <ItemCard key={item._id} item={{...item}} handleDelete={this.handleDelete} />
                            )} */}
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
