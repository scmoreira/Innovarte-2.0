import React, { useState } from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import useStyles from './cart.styles';

const PaymentForm = () => {

    const [paymentDetails, setPaymentDetails] = useState({
        cardHolder: '',
        cardNumber: '',
        expDate: '',
        cvv: ''
    });

    const classes = useStyles();

    const handleChange = e => {
        setPaymentDetails({
            ...paymentDetails,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Typography variant='h3' gutterBottom>Payment Data</Typography>
            <Grid container spacing={ 2 } component='form' className={ classes.form }>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='cardHolder'
                        label='Cardholder'
                        fullWidth
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='cardNumber'
                        label='Card Number'
                        placeholder='1234 1234 1234 1234'
                        fullWidth
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='expDate'
                        label='Expiration Date'
                        placeholder='MM/AA'
                        fullWidth
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
                <Grid item xs={ 12 } md={ 6 }>
                    <TextField
                        required
                        name='cvv'
                        label='CVV'
                        helperText='* Verification code'
                        fullWidth
                        variant='outlined'
                        onChange={ handleChange }
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default PaymentForm;