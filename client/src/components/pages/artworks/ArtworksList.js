import React, { useContext, useEffect } from 'react';

import ArtworkContext from '../../../context/artworks/artworkContext';
import AlertContext from '../../../context/alert/alertContext';

import ArtworkCard from './ArtworkCard';

import { Grid } from '@material-ui/core';
import useStyles from './artworks.styles';

const ArtworksList = () => {

    const artworkContext = useContext(ArtworkContext);
    const alertContext = useContext(AlertContext);
    const classes = useStyles();

    const { artworksOnSell, message, getArtworksOnSell } = artworkContext;
    const { alert, showAlert } = alertContext;

    useEffect(() => {
        if (message) {
            showAlert(message.message, message.category);
        }
        getArtworksOnSell();
        // eslint-disable-next-line
    }, [message]);

    return (
        <div className={classes.artworksListRoot}>
            { alert && <div className={`alert ${alert.category}`}>{ alert.message}</div> }
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Grid container justify='space-around'>
                        {artworksOnSell.map(artwork => (
                            <ArtworkCard key={artwork._id} artwork={artwork} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ArtworksList;