import React, { useState, useContext, useEffect } from 'react';

import AuthContext from '../../../../context/auth/authContext';
import ArtworkContext from '../../../../context/artworks/artworkContext';
import AlertContext from '../../../../context/alert/alertContext';

import { SubmitButton } from '../../../shared/Button';
import { AlertError, AlertSuccess } from '../../../shared/Alert';

import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './artworks.profile.styles';

const NewArtworkForm = props => {

    const classes = useStyles();

    const { user } = useContext(AuthContext);
    const { alert, showAlert } = useContext(AlertContext);
    const {
        errorMessage,
        tagList,
        currencies,
        addNewArtwork
    } = useContext(ArtworkContext);

    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [newArtwork, setNewArtwork] = useState({
        title: '',
        image: '',
        description: '',
        size: '',
        materials: '',
        currency: 'EUR',
        price: 0,
        tags: 'Other',
        artist: '',
        owner: ''
    });

    const { title, description, size, materials, price, artist } = newArtwork;
    const { open, onClose } = props;

    const handleChange = e => {
        const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
        setNewArtwork({ ...newArtwork, [e.target.name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setIsLoading(true);
        setMessage('Artwork added! Check your profile.');

        const uploadData = new FormData();
        Object.keys(newArtwork).forEach(key => {
            uploadData.append(key, newArtwork[key]);
        });
        addNewArtwork(uploadData);

        setTimeout(() => {
            setIsLoading(false);
            cleanForm();
        }, 3000);
    };

    const cleanForm = () => {
        setNewArtwork({
            title: '',
            image: '',
            description: '',
            size: '',
            materials: '',
            currency: 'EUR',
            price: 0,
            tags: 'Other',
            artist: '',
            owner: ''
        });
        setMessage('');
    };

    useEffect(() => {
        if (user) {
            setNewArtwork({ ...newArtwork, 'owner': user._id });
        }
        if (errorMessage) {
            showAlert(errorMessage);
        }
        //eslint-disable-next-line
    }, [errorMessage]);

    return (
        <Modal
            open={ open }
            onClose={ onClose }
        >
            <Grid
                item
                md={ 10 }
                className={ classes.newArtworkRoot }
                component={ Paper }
                elevation={ 3 }
            >
                <div className={ classes.newArtworkPaper }>
                    <Typography component='h1' variant='h5'>
                        Add a new artwork
                    </Typography>
                    <form
                        className={ classes.newArtworkForm }
                        onSubmit={ handleSubmit }
                    >
                        <Grid container spacing={ 2 }>
                            <Grid item xs={ 12 } md={ 6 }>
                                <TextField
                                    required
                                    fullWidth
                                    variant='outlined'
                                    name='title'
                                    value={ title }
                                    label='Title'
                                    aria-label='title'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 } md={ 6 }>
                                <TextField
                                    required
                                    fullWidth
                                    variant='outlined'
                                    name='artist'
                                    value={ artist }
                                    label='Artist'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 }>
                                <TextField
                                    required
                                    fullWidth
                                    variant='outlined'
                                    name='description'
                                    value={ description }
                                    label='Description'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 } md={ 8 }>
                                <TextField
                                    required
                                    fullWidth
                                    variant='outlined'
                                    name='materials'
                                    value={ materials }
                                    label='Materials'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 } md={ 4 }>
                                <TextField
                                    required
                                    select
                                    fullWidth
                                    variant='outlined'
                                    name='tags'
                                    onChange={ handleChange }
                                    SelectProps={ {
                                        native: true,
                                    } }
                                >
                                    <option>Type of artwork</option>
                                    { tagList.map((tag) => (
                                        <option key={ tag } value={ tag }>
                                            { tag }
                                        </option>
                                    )) }
                                </TextField>
                            </Grid>
                            <Grid item sm={ 12 } md={ 6 }>
                                <TextField
                                    required
                                    fullWidth
                                    variant='outlined'
                                    name='size'
                                    value={ size }
                                    label='Size (cm.)'
                                    placeholder='e.g: 30x50'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 } md={ 3 }>
                                <TextField
                                    required
                                    select
                                    fullWidth
                                    variant='outlined'
                                    name='currency'
                                    onChange={ handleChange }
                                    SelectProps={ {
                                        native: true,
                                    } }
                                >
                                    <option>Currency</option>
                                    { currencies.map((option) => (
                                        <option key={ option } value={ option }>
                                            { option }
                                        </option>
                                    )) }
                                </TextField>
                            </Grid>
                            <Grid item xs={ 12 } md={ 3 }>
                                <TextField
                                    required
                                    type='number'
                                    fullWidth
                                    variant='outlined'
                                    name='price'
                                    value={ price }
                                    label='Price'
                                    onChange={ handleChange }
                                />
                            </Grid>
                            <Grid item xs={ 12 } md={ 12 }>
                                <TextField
                                    required
                                    type='file'
                                    fullWidth
                                    variant='outlined'
                                    name='image'
                                    onChange={ handleChange }
                                />
                            </Grid>
                        </Grid>
                        <div className={classes.spinner}>
                            { isLoading && <CircularProgress /> }
                        </div>
                        { (!isLoading && message) && <AlertSuccess text={ message } /> }
                        { alert && <AlertError text={ alert } /> }
                        <SubmitButton text='Add artwork' />
                    </form>
                </div>
            </Grid>
        </Modal>
    );
};

export default NewArtworkForm;