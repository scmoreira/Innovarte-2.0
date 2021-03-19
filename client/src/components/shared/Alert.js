import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: theme.palette.text.terciary,
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  
export const AlertError = props => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Alert variant="outlined" severity="error">
         { props.text }
        </Alert>
      </div>
    );
}

export const AlertSuccess = props => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Alert variant="outlined" severity="success">
            {props.text}
        </Alert>
      </div>
    );
}