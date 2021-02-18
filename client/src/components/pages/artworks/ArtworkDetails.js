import React from 'react';

import { DeleteButton, AddToCartButton, EditButton } from '../../shared/Button';
import { Modal } from '@material-ui/core';
import useStyles from './artworks.styles';

const ArtworkDetails = props => {

    const classes = useStyles();

    return (
        <Modal
            open={props.open}
            onClose={props.onClose}
        >
            <div className={classes.detailsContainer}>
                    <div className={'container-fluid'}>
                        <div className='row'>
                            <div className='col-md-12 col-lg-6'>
                            <img
                                src={props.artwork.image}
                                alt={props.artwork.title}
                                className={classes.detailsImg} />
                            </div>
                            <div className={`col-md-12 col-lg-6 ${classes.detailsContent}`}>
                                <div>
                                    <h1>{props.artwork.title}</h1>
                                    <p>by <i>{props.artwork.artist}</i></p>
                                    <p>{props.artwork.description}</p>
                                    <p><span className='text-muted'>Materials: {props.artwork.materials} |
                                        Size: {props.artwork.size}</span></p>
                                    <p>Price: {props.artwork.price} {props.artwork.currency}</p>
                                    <div className='container-fluid'>
                                        <div className={`row ${classes.btnContainer}`}>
                                            <AddToCartButton />
                                            <DeleteButton />
                                            <EditButton />
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