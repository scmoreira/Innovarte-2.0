import React, { useContext, useState, useEffect } from 'react';

import AuthContext from '../../../context/auth/authContext';
import AlertContext from '../../../context/alert/alertContext';

import { SubmitButton } from '../../shared/Button';
import { AlertError } from '../../shared/Alert';

import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';

import useStyles from './authForms.styles';

const Login = props => {

  const { authenticated, message, login } = useContext(AuthContext);
  const { alert, showAlert } = useContext(AlertContext);

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const classes = useStyles();

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(user);
  };

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
    <Grid item className={ classes.root } md={ 10 } component={ Paper } elevation={ 3 }>
      <div className={ classes.paper }>
        <Avatar className={ classes.avatar }>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log in
          </Typography>
        <form className={ classes.form } onSubmit={ handleSubmit }>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Username'
            name='username'
            value={ user.username }
            autoComplete='username'
            onChange={ handleChange }
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            value={ user.password }
            label='Password'
            type='password'
            onChange={ handleChange }
          />
          { alert && <AlertError text={ alert } /> }
          <SubmitButton text='Log in' />
        </form>
      </div>
    </Grid>
  );
};

export default Login;