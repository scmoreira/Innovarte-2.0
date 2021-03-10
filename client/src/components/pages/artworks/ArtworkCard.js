import React, { useState } from 'react';

import { Capitalize } from '../../shared/helpers';
import ArtworkDetails from './ArtworkDetails';  

import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './artworks.styles';

const ArtworkCard = artwork => {

    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const { title, image, artist, currency, price, } = artwork;
    
    return (
        <>
        <Card className={classes.cardRoot} >
            <CardActionArea>
                <CardMedia
                    className={classes.cardMedia}
                    image= {image}
                    title={title}
                />
                <CardContent className={classes.cardContent}>
                <Typography variant='h5' component='h2'>
                    {title}
                </Typography>
                <Typography variant='body2' component='p'>
                    by <i>{Capitalize(artist)}</i>
                </Typography>
                <Typography variant='body2' component='p'>
                    {price} {currency}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardFoot}>
                    <Button onClick={handleOpen}>Details</Button>
            </CardActions>
        </Card>
            <ArtworkDetails open={open} onClose={handleClose} artwork={artwork} />
        </>
    );
}

export default ArtworkCard;