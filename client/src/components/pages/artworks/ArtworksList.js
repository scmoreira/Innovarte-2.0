import React, { useContext, useEffect } from 'react';

import ArtworkContext from '../../../context/artworks/artworkContext';
import AlertContext from '../../../context/alert/alertContext';

import ArtworkCard from './ArtworkCard';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        margin: '2% auto'
    }
});

const ArtworksList = () => {

    const artworkContext = useContext(ArtworkContext);
    const alertContext = useContext(AlertContext);
    const classes = useStyles();

    const { artworks, message, getAllArtworks } = artworkContext;
    const { alert, showAlert } = alertContext;

    useEffect(() => {
        if (message) {
            showAlert(message.message, message.category);
        }
        getAllArtworks();
    }, [message]);

    return (
        <div className={classes.root}>
            { alert && <div className={`alert ${alert.category}`}>{ alert.message}</div> }
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                    <Grid container justify='space-around'>
                        {artworks.map(artwork => (
                        <ArtworkCard key={artwork._id} artwork={artwork} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ArtworksList;