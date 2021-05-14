import React from 'react';

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
        marginBottom: '5%'
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: '40%',
        objectFit: 'contain'
    },
});

const ItemCard = ({ item }) => {
    const { image, title, description, price } = item;
    const classes = useStyles();

    return (
        <Grid item xs={ 12 } md={ 10 }>
            <CardActionArea component='a' href='#'>
                <Card className={ classes.card }>
                    <CardMedia className={ classes.cardMedia } image={ image } />
                    <div className={ classes.cardDetails }>
                        <CardContent>
                            <Typography component='h2' variant='h5'>
                                { title }
                            </Typography>
                            <Typography variant='body2' color='textSecondary'>
                                { description }
                            </Typography>
                            <Typography variant='body2' paragraph>
                                Price: { price } EUR
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
};

export default ItemCard;