import React, { useContext, useEffect } from 'react';

import ArtworkContext from '../../../context/artworks/artworkContext';

import ArtworkCard from './ArtworkCard';

import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './artworks.styles';

const ArtworksList = () => {

    const artworkContext = useContext(ArtworkContext);
    const { artworks, artists, getArtworksOnSell, getArtworksByTag, getArtworksByArtist, getArtists } = artworkContext;
  
    const artistOptions = { options: artists.map((option) => option.artist) }
    const tags = ['All','Painting', 'Sculpture', 'Drawing', 'Crafts', 'Photography', 'Other'];
    
    const classes = useStyles();

    useEffect(() => {
        getArtworksOnSell();
        getArtists();
        // eslint-disable-next-line
    }, []);

    const handleArtistFilter = (event, artist) => {
        
        event.preventDefault();

        if (artist === null) {
            getArtworksOnSell();
        }
        getArtworksByArtist(artist);
    }

    const handleTagFilter = event => {
        let tag = event.target.value;

        if (tag === 'All') {
            getArtworksOnSell();
        } else {
            getArtworksByTag(tag);
        }
    }

    return (
        <div className={classes.artworksListRoot}>
            <div className={classes.formContainer}>
                <Autocomplete
                    {...artistOptions}
                    className={classes.formControl}
                    name='artist'
                    onChange={(event, artist) => {
                        handleArtistFilter(event, artist);
                    }} 
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label='Artist'
                            variant='filled'
                        />
                    )}
                />
                <FormControl
                    className={classes.formControl}
                    variant='filled'
                >
                    <InputLabel id='select-tag'>Filter by</InputLabel>
                    <Select
                        labelId='select-tag'
                        name='tags'
                        value= ''
                        onChange={handleTagFilter}
                    >
                        {tags.sort().map((tag, index) => (
                            <MenuItem
                                key={index}
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