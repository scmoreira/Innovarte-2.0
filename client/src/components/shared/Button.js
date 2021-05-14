import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';
import ReplyOutlinedIcon from '@material-ui/icons/ReplyOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles((theme) => ({
    textButton: {
        height: '35px',
        marginTop: '3%',
        '@media (max-width: 650px )': {
            marginTop: '3%'
        }
    },
    submitButton: {
        margin: theme.spacing(3, 0, 2)
    }
}));

export const DeleteButton = () => {
    return (
        <Tooltip title='Delete' arrow>
            <IconButton aria-label='delete'>
                <DeleteForeverOutlinedIcon color='error' fontSize='large' />
            </IconButton>
        </Tooltip>
        
    );
}

export const AddToCartButton = props => {
    return (
        <Tooltip title='Add' arrow onClick={props.onClick}>
            <IconButton aria-label='add to shopping cart'>
                <AddShoppingCartOutlinedIcon color='primary' fontSize='large'/>
            </IconButton> 
        </Tooltip>
        
    );
}

export const GoBackButton = props => {
    const classes = useStyles();
    return (
        <Button
            variant='contained'
            color='primary'
            startIcon={<ReplyOutlinedIcon />}
            className={classes.textButton}
            onClick={() => props.history.goBack()}
        >
           Go Back
        </Button>
    );
}

export const EditButton = () => {
    const classes = useStyles();
    return (
        <Button
            variant='contained'
            color='primary'
            startIcon={<EditOutlinedIcon />}
            className={classes.textButton}
        >
           Edit
        </Button>
    );
}

export const SubmitButton = props => {
    const classes = useStyles();
    return (
        <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submitButton}
        >
            {props.text}
        </Button>
    ); 
}