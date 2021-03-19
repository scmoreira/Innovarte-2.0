import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import useStyles from './cart.styles';

const PaymentForm = () => {

    const classes = useStyles();
    
    return(
        <>
            <Typography variant='h3' gutterBottom>Método de pago</Typography>
            <Grid container spacing={2} component='form' className={classes.form}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='cardName'
                        label='Cardholder'
                        fullWidth
                        autoComplete='cc-name'
                        variant='outlined' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='cardNumber'
                        label='Card Number'
                        fullWidth
                        autoComplete='cc-number'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField required id='expDate' label='Expiration date' fullWidth autoComplete='cc-exp' variant='outlined' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id='cvv'
                        label='CVV'
                        helperText='* Verification code'
                        fullWidth
                        autoComplete='cc-csc'
                        variant='outlined'
                    />
                </Grid>
            </Grid>
        </>
    )
}
    
export default PaymentForm;