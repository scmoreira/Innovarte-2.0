import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import useStyles from './cart.styles';

const AddressForm = () => {

    const [shippingDetails, setShippingDetails] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: ''
    });

    const classes = useStyles();

    const handleChange = e => {
        setShippingDetails({
            ...shippingDetails,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <Typography
                variant='h3' gutterBottom
            >
                Shipping Address
            </Typography>
            <Grid
                container
                spacing={ 2 }
                component='form'
                className={ classes.form }
            >
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='firstName'
                        label='First Name'
                        fullWidth
                        autoComplete='given-name'
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='lastName'
                        label='Last Name'
                        fullWidth
                        autoComplete='family-name'
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 12 }>
                    <TextField
                        required
                        name='address1'
                        label='Address'
                        fullWidth
                        autoComplete='shipping address-line1'
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 12 }>
                    <TextField
                        name='address2'
                        label='Address line 2'
                        fullWidth
                        autoComplete='shipping address-line2'
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='city'
                        label='City'
                        fullWidth
                        autoComplete='shipping address-level2'
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        name='state'
                        label='State'
                        fullWidth
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='zip'
                        label='Postal Code'
                        fullWidth
                        autoComplete='shipping postal-code'
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='country'
                        label='Country'
                        fullWidth
                        autoComplete='shipping country'
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default AddressForm;