import React, { useState } from 'react';

import ArtworkDetails from './ArtworkDetails';  

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

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
                    by <span className={ classes.spanArtist}>{ artist }</span>
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