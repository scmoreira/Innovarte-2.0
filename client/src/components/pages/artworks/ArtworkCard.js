import React, { useState } from 'react';

import ArtworkDetails from './ArtworkDetails';  
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';
import useStyles from './artworks.styles';

const ArtworkCard = artwork => {

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
                    image= {artwork.image}
                    title={artwork.title}
                />
                <CardContent className={classes.cardContent}>
                <Typography variant='h5' component='h2'>
                    {artwork.title}
                </Typography>
                <Typography variant='body2' component='p'>
                    by <i>{artwork.artist}</i>
                </Typography>
                <Typography variant='body2' component='p'>
                    {artwork.price} {artwork.currency}
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