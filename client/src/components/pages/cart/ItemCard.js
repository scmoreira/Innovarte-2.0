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
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
});

const ItemCard = item => {

    const classes = useStyles();

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href='#'>
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={item.image} />
                    <div className={classes.cardDetails}>
                        <CardContent>
                        <Typography component='h2' variant='h5'>
                            {item.title}
                        </Typography>
                        <Typography variant='body2' color='textSecondary'>
                            {item.description}
                        </Typography>
                        <Typography variant='body2' paragraph>
                            Materials: {item.materials} | Size: {item.size}
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