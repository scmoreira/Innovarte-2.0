import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import useStyles from './authForms.styles';

const Signup = () => {

  const classes = useStyles();

  return (
    <Grid item sm={12} md={6} component={Paper} elevation={3}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                variant='outlined'
                fullWidth
                required
                name='username'
                label='Username'
                autoComplete='username'
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                required
                name='email'
                label='Email Address'
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                required
                name='password'
                label='Password'
                type='password'
              />
            </Grid>
            <RadioGroup row aria-label='role' name='role'>
              <FormControlLabel
                value='user'
                label='User'
                labelPlacement='Start'
                control={<Radio className={classes.radio} />}
              />
              <FormControlLabel
                value='artist'
                label='Artist'
                labelPlacement='Start'
                control={<Radio className={classes.radio} />}
              />
            </RadioGroup>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Grid>
  );
}

export default Signup;