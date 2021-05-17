import React, { useContext, useEffect, useState } from 'react';

import AuthContext from '../../../context/auth/authContext';
import CartContext from '../../../context/cart/cartContext';

import { AddToCartButton } from '../../shared/Button';
import { AlertError, AlertSuccess } from '../../shared/Alert';
import Modal from '@material-ui/core/Modal';

import useStyles from './artworks.styles';

const ArtworkDetails = props => {

    const { user } = useContext(AuthContext);
    const { addItemToCart } = useContext(CartContext);

    const [isAdded, setIsAdded] = useState(false);
    const [error, setError] = useState(false);

    const classes = useStyles();

    const { open, onClose, artwork } = props;
    const { title, image, artist, price, currency, description, size, materials } = artwork;

    const handleAddToCart = () => {
        if (user) {
            addItemToCart(user._id, artwork._id);
            setIsAdded(true);
        }
        else {
            setError(true);
        }
    };

    const cleanState = () => {
        setTimeout(() => {
            setIsAdded(false);
            setError(false);
        }, 5000);
    }

    useEffect(() => {
        cleanState();
    }, []);

    return (
        <Modal
            open={ open }
            onClose={ onClose }
        >
            <div className={ classes.detailsContainer }>
                <div className={ 'container-fluid' }>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                            <img
                                src={ image }
                                alt={ title }
                                className={ classes.detailsImg } />
                        </div>
                        <div className={ `col-md-12 col-lg-6 ${classes.detailsContent}` }>
                            <div>
                                <h1>{ title }</h1>
                                <p>by <span className={ classes.spanArtist }>{ artist }</span></p>
                                <p>{ description }</p>
                                <p><span className='text-muted'>Materials: { materials } |Size: { size }</span></p>
                                <p>Price: { price } { currency }</p>
                                <div className='container-fluid'>
                                    <div className={ `row ${classes.btnContainer}` }>
                                        <AddToCartButton onClick={ handleAddToCart } />
                                    </div>
                                    <div>
                                        { isAdded && <AlertSuccess text='Item added to your cart' /> }
                                        { error && <AlertError text='Please login or register to buy' /> }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ArtworkDetails;