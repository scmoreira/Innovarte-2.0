import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../../context/auth/authContext';
import UserContext from '../../../context/user/userContext';
import AlertContext from '../../../context/alert/alertContext';

import { SubmitButton } from '../../shared/Button';
import { AlertError, AlertSuccess } from '../../shared/Alert';

import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './profile.styles';

const EditProfileForm = props => {

    const classes = useStyles();

    const { user } = useContext(AuthContext);
    const { message, editProfile } = useContext(UserContext);
    const { alert, showAlert } = useContext(AlertContext);

    const [isLoading, setIsLoading] = useState(false);
    const [printMessage, setPrintMessage] = useState('');
    const [updateUser, setUpdateUser] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        password: user.password,
        email: user.email,
        avatar: user.avatar,
        role: user.role
    });

    const { firstName, lastName, username, email } = updateUser;
    const { open, onClose } = props;

    const handleChange = e => {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setUpdateUser({ ...updateUser, [e.target.name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setIsLoading(true);

        const uploadData = new FormData();
        Object.keys(updateUser).forEach(key => {
            uploadData.append(key, updateUser[key]);
        });

        editProfile(user._id, uploadData);
        setPrintMessage('Profile succesfully updated!');

        setTimeout(() => {
            setIsLoading(false);
            cleanForm();
        }, 3000);
    };

    const cleanForm = () => {
        setUpdateUser({
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            password: user.password,
            email: user.email,
            avatar: user.avatar,
            role: user.role
        });
    };

    useEffect(() => {
        if (message) {
            showAlert(message);
        }
        //eslint-disable-next-line
    }, [message]);

    return (
        <Modal
            open={ open }
            onClose={ onClose }
        >
            <Grid
                item
                md={ 10 }
                className={ classes.editProfileRoot }
                component={ Paper }
                elevation={ 3 }
            >
                <div className={ classes.editProfilePaper }>
                    <Typography component='h1' variant='h5'>
                        Edit your profile details
                    </Typography>
                    <form
                        className={ classes.editProfileForm }
                        onSubmit={ handleSubmit }
                    >
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 } md={ 6 }>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    required
                                    name='firstName'
                                    value={ firstName }
                                    label='First Name'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    required
                                    name='lastName'
                                    value={ lastName }
                                    label='Last Name'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item sm={ 12 }>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    required
                                    name='username'
                                    value={ username }
                                    label='Username'
                                    autoComplete='username'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    variant='outlined'
                                    fullWidth
                                    required
                                    name='email'
                                    value={ email }
                                    label='Email Address'
                                    autoComplete='email'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 } md={ 12 }>
                                <TextField
                                    type='file'
                                    fullWidth
                                    variant='outlined'
                                    name='avatar'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <RadioGroup row aria-label='role'>
                                <FormControlLabel
                                    name='role'
                                    value='user'
                                    label='User'
                                    labelPlacement='start'
                                    control={ <Radio className={ classes.radio } /> }
                                    onChange={ handleChange }
                                />
                                <FormControlLabel
                                    name='role'
                                    value='artist'
                                    label='Artist'
                                    labelPlacement='start'
                                    control={ <Radio className={ classes.radio } /> }
                                    onChange={ handleChange }
                                />
                            </RadioGroup>
                        </Grid>
                        <div className={ classes.spinner }>
                            { isLoading && <CircularProgress /> }
                        </div>
                        { (!isLoading && printMessage) && <AlertSuccess text={ printMessage } /> }
                        { alert && <AlertError text={ alert } /> }
                        <SubmitButton text='Confirm' />
                    </form>
                </div>
            </Grid>
        </Modal>
    );
};

export default EditProfileForm;