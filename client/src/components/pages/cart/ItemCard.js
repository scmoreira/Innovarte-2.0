import React, { useContext, useEffect } from 'react';

import CartContext from '../../../context/cart/cartContext';

import { DeleteButton } from '../../shared/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
});

const ItemCard = ( item ) => {
    
    const cartContext = useContext(CartContext);
    const { artwork, getArtwork } = cartContext;

    const classes = useStyles();
    
    useEffect(() => {
        getArtwork(item);
    }, []);

    if (!artwork) {
        return null;
    }

    console.log(artwork)
    
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card className={classes.card}>
                    <CardMedia className={ classes.cardMedia } image={ artwork.image} />
                    <div className={classes.cardDetails}>
                        <CardContent>
                        <Typography component='h2' variant='h5'>
                                { artwork.title}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                                { artwork.description}
                        </Typography>
                        <Typography variant='body2' paragraph>
                                Materials: { artwork.materials } | Size: { artwork.size}
                        </Typography>
                        <Typography variant='body2'>
                            <DeleteButton />
                        </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

export default ItemCard;