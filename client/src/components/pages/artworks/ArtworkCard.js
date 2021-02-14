import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        height: 'auto',
        margin: '2%',
    },
    media: {
        maxWidth: '100%',
        height: 200,
        objectFit: 'contain'
    },
    cardFoot: {
        justifyContent: 'center',
        '& button': {
            size: 'small'
        }
    }
});

const ArtworkCard = artwork => {

    const Artwork = artwork.artwork;
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image= {Artwork.image}
                    title={Artwork.title}
                />
                <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                    {Artwork.title}
                </Typography>
                <Typography variant='body2' component='p'>
                    {Artwork.price} {Artwork.currency}
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardFoot}>
                <Link to='/artworks/details/:artwork_id'>
                    <Button>Details</Button>
                </Link>
                <Link to='/cart'>
                    <ShoppingCartOutlinedIcon />
                </Link>
            </CardActions>
        </Card>
    );
}

export default ArtworkCard;