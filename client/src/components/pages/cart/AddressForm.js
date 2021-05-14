import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import useStyles from './cart.styles';

const AddressForm = () => {

    const classes = useStyles();

    return (
        <>
            <Typography variant='h3' gutterBottom>Shipping Address</Typography>
            <Grid container spacing={2} component='form' className={classes.form}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='firstName'
                        name='firstName'
                        label='Name'
                        fullWidth
                        autoComplete='given-name'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='lastName'
                        name='lastName'
                        label='Surname'
                        fullWidth
                        autoComplete='family-name'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        id='address1'
                        name='address1'
                        label='Address'
                        fullWidth
                        autoComplete='shipping address-line1'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        id='address2'
                        name='address2'
                        label='Address line 2'
                        fullWidth
                        autoComplete='shipping address-line2'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='city'
                        name='city'
                        label='City'
                        fullWidth
                        autoComplete='shipping address-level2'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        id='state'
                        name='state'
                        label='State'
                        fullWidth
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='zip'
                        name='zip'
                        label='Postal Code'
                        fullWidth
                        autoComplete='shipping postal-code'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='country'
                        name='country'
                        label='Country'
                        fullWidth
                        autoComplete='shipping country'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name='saveAddress'
                                value='yes'
                            />
                        }
                        label='Use this address for payment.'
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default AddressForm;