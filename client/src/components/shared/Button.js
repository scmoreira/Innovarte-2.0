import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    }
  },
}));

const DeleteButton = (color) => {
    return (
        <IconButton color={color} aria-label="delete">
            <DeleteIcon />
        </IconButton>
    );
}

const TextButton = (text, ...props) => {
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button {...props}>
                {text}
            </Button>
        </div>
    );
}

export { DeleteButton };
export default TextButton;