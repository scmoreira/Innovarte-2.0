import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Button, IconButton } from '@material-ui/core';
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
    }
}));

const DeleteButton = () => {
    return (
        <Tooltip title='Delete' arrow>
            <IconButton aria-label='delete'>
                <DeleteForeverOutlinedIcon color='error' fontSize='large' />
            </IconButton>
        </Tooltip>
        
    );
}

const AddToCartButton = () => {
    return (
        <Tooltip title='Add' arrow>
            <IconButton aria-label='add to shopping cart'>
                <AddShoppingCartOutlinedIcon color='primary' fontSize='large'/>
            </IconButton> 
        </Tooltip>
        
    );
}

const GoBackButton = props => {
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

const EditButton = () => {
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

export { DeleteButton, AddToCartButton, GoBackButton, EditButton };
