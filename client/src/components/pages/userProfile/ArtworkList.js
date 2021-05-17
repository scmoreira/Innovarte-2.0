import React from 'react';
import { Link } from 'react-router-dom';

import ArtworkCardProfile from './ArtworkCardProfile';
import Grid from '@material-ui/core/Grid';
import useStyles from './profile.styles';

const Artworks = ({ artworkList, editable }) => {

    const classes = useStyles();

    return (
        <div className={ classes.artworksRoot }>
            <Grid container>
                <Grid item sm={ 12 }>
                    <Grid container justify='rigth'>
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