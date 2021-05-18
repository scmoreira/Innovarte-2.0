import React, { useContext, useState } from 'react';
import AuthContext from '../../../context/auth/authContext';

import { EditButton, AddButton } from '../../shared/Button';
import NewArtworkForm from './artworksProfile/NewArtwork';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';

import useStyles from './profile.styles';

const UserInfo = ({ setShouldRefresh }) => {

    const classes = useStyles();
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setShouldRefresh(true);
    }

    return (
        <div>
            <Grid item xs={ 12 } md={ 8 }>
                <Card className={ classes.userCard }>
                    <CardHeader
                        avatar={
                            <Avatar
                                className={ classes.userAvatar }
                                aria-label='avatar'
                            >
                                <FaceOutlinedIcon />
                            </Avatar>
                        }
                    />
                    <div className={ classes.cardDetails }>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                { user.firstName } { user.lastName }
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <span>{ user.role }</span> | { user.email }
                            </Typography>
                        </CardContent>
                    </div>
                    <div className={ classes.buttonDiv }>
                        <EditButton
                            ariaLabel='edit your profile'
                            text='Edit profile'
                            onClick={ handleOpen }
                            />
                        { user.role === 'artist' &&
                            <AddButton
                            alt='add new artwork'
                            text='New artwork'
                            onClick={ handleOpen }
                            />
                        }
                    </div>
                </Card>
            </Grid>
            <NewArtworkForm open={ open } onClose={ handleClose } />
        </div>
    );
};

export default UserInfo;