import React, { useContext, useState } from 'react';
import AuthContext from '../../../context/auth/authContext';

import { EditButton, AddButton } from '../../shared/Button';
import NewArtworkForm from './artworksProfile/NewArtwork';
import EditProfileForm from './EditProfile';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import useStyles from './profile.styles';


const UserInfo = ({ setShouldRefresh }) => {

    const classes = useStyles();
    const { user } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        avatar: user.avatar
    });
    const [open, setOpen] = useState(false);
    const [modaltype, setModalType] = useState('');

    const handleOpen = (open, modalType) => {
        setOpen(open);
        setModalType(modalType);
    };
    const handleClose = () => {
        setOpen(false);
        setShouldRefresh(true);
    };

    return (
        <div>
            <Grid item xs={ 12 } md={ 8 }>
                <Card className={ classes.userCard }>
                    <CardHeader
                        avatar={
                            <Avatar
                                className={ classes.userAvatar }
                                aria-label='avatar'
                                src={ userInfo.avatar }
                            >
                            </Avatar>
                        }
                    />
                    <div className={ classes.cardDetails }>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                { userInfo.firstName } { userInfo.lastName }
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                <span>{ userInfo.role }</span> | { userInfo.email }
                            </Typography>
                        </CardContent>
                    </div>
                    <div className={ classes.buttonDiv }>
                        <EditButton
                            ariaLabel='edit your profile'
                            text='Edit profile'
                            onClick={ () => handleOpen(true, 'edit') }
                        />
                        { user.role === 'artist' &&
                            <AddButton
                                alt='add new artwork'
                                text='New artwork'
                                onClick={ () => handleOpen(true, 'add') }
                            />
                        }
                    </div>
                </Card>
            </Grid>
            <EditProfileForm
                open={ open && modaltype === 'edit' }
                onClose={ handleClose }
                refresh={ setShouldRefresh }
            />
            <NewArtworkForm
                open={ open && modaltype === 'add' }
                onClose={ handleClose }
                refresh={ setShouldRefresh }
            />
        </div>
    );
};

export default UserInfo;