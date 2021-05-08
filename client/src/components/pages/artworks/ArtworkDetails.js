import React from 'react';

import { AddToCartButton } from '../../shared/Button';
import Modal from '@material-ui/core/Modal';

import useStyles from './artworks.styles';

const ArtworkDetails = props => {

    const classes = useStyles();

    const { open, onClose, artwork } = props;
    const { title, image, artist, price, currency, description, size, materials } = artwork;

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
                                src={image}
                                alt={title}
                                className={classes.detailsImg} />
                        </div>
                        <div className={`col-md-12 col-lg-6 ${classes.detailsContent}`}>
                            <div>
                                <h1>{title}</h1>
                                <p>by <span className={ classes.spanArtist }>{ artist }</span></p>
                                <p>{description}</p>
                                <p><span className='text-muted'>Materials: {materials} |Size: {size}</span></p>
                                <p>Price: {price} {currency}</p>
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