import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ArtworkDetails from './ArtworkDetails';  
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './artworks.styles';

const ArtworkCard = (artwork) => {

    const Artwork = artwork.artwork;
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <Card className={classes.cardRoot} >
            <CardActionArea>
                <CardMedia
                    className={classes.cardMedia}
                    image= {Artwork.image}
                    title={Artwork.title}
                />
                <CardContent className={classes.cardContent}>
                <Typography variant='h5' component='h2'>
                    {Artwork.title}
                </Typography>
                <Typography variant='body2' component='p'>
                    {Artwork.price} {Artwork.currency}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardFoot}>
                    <Button onClick={handleOpen}>Details</Button>
            </CardActions>
        </Card>
            <ArtworkDetails open={open} onClose={handleClose} artwork={Artwork} />
        </>
    );
}

export default ArtworkCard;