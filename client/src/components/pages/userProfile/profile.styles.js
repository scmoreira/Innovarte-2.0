import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& section': {
            margin: '3%',
            '& h2': {
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '1.7em'
            }
        },
        '& section:last-child': {
            marginBottom: '6%'
        },
    },

    /* User Info */
    userCard: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: '3% 4%',
        height: '200px',
        '& h2': {
            fontSize: '3em',
        },
        '& h6': {
            fontSize: '1.5em',
            color: theme.palette.text.primary,
            '& span': {
                textTransform: 'capitalize'
            }
        },
    },
    userAvatar: {
        color: theme.palette.text.secondary,
        backgroundColor: theme.palette.primary.main,
        width: '100px',
        height: '100px',
        marginRight: 0,
        '& svg': {
            width: theme.spacing(7),
            height: theme.spacing(7),
        }
    },
    buttonDiv: {
        display: 'flex',
        flexDirection: 'column',
        '& button': {
            padding: '20px',
            marginBottom: '10px',
            marginRight: '5px'
        },
        '& button:last-child': {
            marginBottom: '0'
        }
    },
}));

export default useStyles;