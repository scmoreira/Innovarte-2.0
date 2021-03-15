import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './authForms.styles';

const Login = () => {

  const classes = useStyles();

  return (
      <Grid item sm={12} md={6} component={Paper} elevation={3}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Log in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Username'
              name='username'
              autoComplete='username'
            />
          <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
            />
            {/* <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            /> */}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Log In
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Forgot password?
                </Link>
              </Grid>
            </Grid> */}
          </form>
        </div>
      </Grid>
  );
}

export default Login;