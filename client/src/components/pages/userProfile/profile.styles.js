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

    /* Edit profile form */
    editProfileRoot: {
        position: 'absolute',
        top: '5%',
        left: '20%',
        width: '50%',
        margin: '0 auto',
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")',
        border: `0.2vw solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[5],

    },
    editProfilePaper: {
        margin: '10px auto',
        padding: '10px 0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '75%',
        minHeight: '600px'
    },
    editProfileForm: {
        width: '100%',
        marginTop: theme.spacing(3),
        '& label': {
            color: theme.palette.text.primary
        }
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px'
    }
}));

export default useStyles;