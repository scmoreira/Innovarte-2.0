import React from 'react';
import { Link } from 'react-router-dom';

import ArtworkCardProfile from '../artworksProfile/ArtworkCardProfile';
import Grid from '@material-ui/core/Grid';
import useStyles from './artworks.profile.styles';

const Artworks = ({ artworkList, editable, setShouldRefresh }) => {

    const classes = useStyles();

    return (
        <div className={ classes.artworksRoot }>
            <Grid container>
                <Grid item sm={ 12 }>
                    <Grid container justify='flex-start'>
                        { artworkList.length < 1 ?
                            <p className={ classes.noItems}>
                                No buyed works... { ' ' }
                                <Link to='/artworks'>
                                    Buy now
                                </Link>
                            </p>
                            :
                            artworkList.map(artwork => (
                                <ArtworkCardProfile
                                    key={ artwork._id }
                                    artwork={ artwork }
                                    editable={ editable }
                                    refresh={ setShouldRefresh }
                                />
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Artworks;