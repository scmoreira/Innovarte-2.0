import React, { useContext, useEffect } from 'react';

import ArtworkContext from '../../../context/artworks/artworkContext';

import ArtworkCard from './ArtworkCard';

import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import useStyles from './artworks.styles';

const ArtworksList = () => {

    const artworkContext = useContext(ArtworkContext);
    const { artworks, getArtworksOnSell, getArtworksByTag, getArtworksByArtist } = artworkContext;
    
    const tags = ['All','Painting', 'Sculpture', 'Drawing', 'Crafts', 'Photography', 'Other'].sort();
    
    const classes = useStyles();

    useEffect(() => {
        getArtworksOnSell();
        // eslint-disable-next-line
    }, []);

    const handleArtistFilter = event => {
        let artist = event.target.value;

        if (artist === '') {
            getArtworksOnSell();
        }
        getArtworksByArtist(artist);
    }

    const handleTagFilter = event => {
        let tag = event.target.value
        
        if (tag === 'All') {
            getArtworksOnSell();
        } else {
            getArtworksByTag(tag);
        }
    }
artworks.map(art => console.log(art))

    return (
        <div className={classes.artworksListRoot}>
            <div className={classes.formContainer}>
                <FormControl className={classes.formControl} >
                    <TextField
                        variant='filled'
                        label='Artist'
                        name= 'artist'
                        onChange={handleArtistFilter} />
                </FormControl>
                <FormControl className={classes.formControl} variant='filled'>
                    <InputLabel id='select-tag'>Filter by</InputLabel>
                    <Select
                        labelId='select-tag'
                        onChange={handleTagFilter}
                    >
                        {tags.map((tag, index) => (
                            <MenuItem
                                key={index}
                                name='tags'
                                value={tag}
                            >
                                {tag}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
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