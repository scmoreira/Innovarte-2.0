import React, { useContext, useEffect, useState } from 'react';

import ArtworkContext from '../../../context/artworks/artworkContext';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import useStyles from './artworks.styles';

const ArtworkFilters = () => {

    const artworkContext = useContext(ArtworkContext);
    const { artists, getArtworksOnSell, getArtworksByTag, getArtworksByArtist, getArtists } = artworkContext;

    const artistOptions = { options: artists.map((option) => option.artist) };
    const tags = ['All', 'Painting', 'Sculpture', 'Drawing', 'Crafts', 'Photography', 'Other'];
    const [tag, setTag] = useState('');

    const classes = useStyles();

    useEffect(() => {
        getArtists();
        // eslint-disable-next-line
    }, []);

    const handleArtistFilter = (event, artist) => {
        event.preventDefault();

        if (artist === null) {
            getArtworksOnSell();
        }
        else {
            getArtworksByArtist(artist);
        }
    };

    const handleTagFilter = event => {
        let tag = event.target.value;
        setTag(tag);

        if (tag === 'All') {
            getArtworksOnSell();
        }
        else {
            getArtworksByTag(tag);
        }
    };

    return (
        <div className={ classes.formContainer }>
            <Autocomplete
                { ...artistOptions }
                className={ classes.formControl }
                name='artist'
                onChange={ (event, artist) => {
                    handleArtistFilter(event, artist);
                } }
                renderInput={ (params) => (
                    <TextField
                        { ...params }
                        label='Artist'
                        variant='filled'
                    />
                ) }
            />
            <FormControl
                className={ classes.formControl }
                variant='filled'
            >
                <InputLabel id='select-tag'>Filter by</InputLabel>
                <Select
                    labelId='select-tag'
                    name='tags'
                    value={ tag }
                    onChange={ handleTagFilter }
                >
                    { tags.sort().map((tag, index) => (
                        <MenuItem
                            key={ index }
                            value={ tag }
                        >
                            {tag }
                        </MenuItem>
                    )) }
                </Select>
            </FormControl>
        </div>
    );
};

export default ArtworkFilters;