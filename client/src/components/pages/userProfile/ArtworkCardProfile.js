import React, { useContext, useState } from 'react';

import ArtworkContext from '../../../context/artworks/artworkContext';

import EditArtwork from './EditArtwork';
import { EditButton, DeleteButton } from '../../shared/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import useStyles from './profile.styles';

const ArtworkCardProfile = props => {

    const { deleteArtwork } = useContext(ArtworkContext);
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const { _id, title, image, artist, currency, price } = props.artwork;

    const handleDelete = e => {
        e.preventDefault();
        deleteArtwork(_id);
    };

    return (
        <>
            <Card className={ classes.profileCardRoot } >
                <CardActionArea>
                    <CardMedia
                        className={ classes.profileCardMedia }
                        image={ image }
                        title={ title }
                    />
                    <CardContent className={ classes.profileCardContent }>
                        <Typography variant='h6' component='h5'>
                            { title }
                        </Typography>
                        <Typography variant='body2' component='p'>
                            by <span className={ classes.spanArtist }>{ artist }</span>
                        </Typography>
                        <Typography variant='body2' component='p'>
                            { price } { currency }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                { props.editable &&
                    <CardActions className={ classes.profileCardFoot }>
                        <EditButton
                            ariaLabel='edit this artwork'
                            text='Edit'
                            onClick={ handleOpen }
                        />
                        <Typography variant='body2' onClick={ handleDelete } >
                            <DeleteButton />
                        </Typography>
                    </CardActions>
                }
            </Card>
            {/* <EditArtwork open={ open } onClose={ handleClose } artwork={ props.artwork } /> */ }
        </>
    );
};

export default ArtworkCardProfile;