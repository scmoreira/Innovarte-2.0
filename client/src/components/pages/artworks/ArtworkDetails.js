import React from 'react';

import { AddToCartButton } from '../../shared/Button';
import { Modal } from '@material-ui/core';

import useStyles from './artworks.styles';

const ArtworkDetails = props => {

    const { open, onClose, artwork } = props;
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={classes.detailsContainer}>
                <div className={'container-fluid'}>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6'>
                        <img
                            src={artwork.image}
                            alt={artwork.title}
                            className={classes.detailsImg} />
                        </div>
                        <div className={`col-md-12 col-lg-6 ${classes.detailsContent}`}>
                            <div>
                                <h1>{artwork.title}</h1>
                                <p>by <i>{artwork.artist}</i></p>
                                <p>{artwork.description}</p>
                                <p><span className='text-muted'>Materials: {artwork.materials} |
                                    Size: {artwork.size}</span></p>
                                <p>Price: {artwork.price} {artwork.currency}</p>
                                <div className='container-fluid'>
                                    <div className={`row ${classes.btnContainer}`}>
                                        <AddToCartButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ArtworkDetails;