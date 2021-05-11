import React, { useContext, useEffect } from 'react';

import ArtworkContext from '../../../context/artworks/artworkContext';

import ArtworkFilters from './ArtworkFilters';
import ArtworkCard from './ArtworkCard';
import Grid from '@material-ui/core/Grid';

import useStyles from './artworks.styles';

const ArtworksList = () => {

    const artworkContext = useContext(ArtworkContext);
    const { artworks, getArtworksOnSell } = artworkContext;
      
    const classes = useStyles();

    useEffect(() => {
        getArtworksOnSell();
        // eslint-disable-next-line
    }, []);

    return (
        <div className={ classes.artworksListRoot }>
            <ArtworkFilters />
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Grid container justify='space-around'>
                        { artworks.map(artwork => (
                            <ArtworkCard key={artwork._id} {...artwork} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ArtworksList;