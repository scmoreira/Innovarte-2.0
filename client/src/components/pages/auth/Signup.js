import React, { useContext, useState, useEffect } from 'react';

import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

import { SubmitButton } from '../../shared/Button';
import { AlertError } from '../../shared/Alert';

import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import useStyles from './authForms.styles';

const Signup = props => {
  
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });
    
  const classes = useStyles();

  const { authenticated, message, signup } = authContext;
  const { alert, showAlert } = alertContext;
  const { username, email, password, role } = newUser;

  const handleChange = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    
    e.preventDefault();

    if (role === '') {
      showAlert('Please select your role');
      return;
    }
    signup({ username, email, password, role });
  }

  useEffect(() => {
    if (authenticated) {
      props.history.push('/');
    }
    if (message) {
      showAlert(message);
    }
    // eslint-disable-next-line
  }, [message, authenticated, props.history]);

  return (
    <Grid item sm={12} md={6} component={Paper} elevation={3}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <TextField
                variant='outlined'
                fullWidth
                required
                name='username'
                value={username}
                label='Username'
                autoComplete='username'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                required
                name='email'
                value={email}
                label='Email Address'
                autoComplete='email'
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                fullWidth
                required
                name='password'
                value= {password}
                label='Password'
                type='password'
                onChange={handleChange}
              />
            </Grid>
            <RadioGroup row aria-label='role'>
              <FormControlLabel
                name='role'
                value='user'
                label='User'
                labelPlacement='start'
                control={<Radio className={classes.radio} />}
                onChange={handleChange}
              />
              <FormControlLabel
                name='role'
                value='artist'
                label='Artist'
                labelPlacement='start'
                control={<Radio className={classes.radio} />}
                onChange={handleChange}
              />
            </RadioGroup>
            {alert && <AlertError text={alert} />}
          </Grid>
          <SubmitButton text='Sign up' />
        </form>
      </div>
    </Grid>
  );
}

export default Signup;