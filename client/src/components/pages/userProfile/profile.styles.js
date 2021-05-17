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
    card: {
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
    avatar: {
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

    /* Atworks List */
    artworksRoot: {
        margin: '10px auto',
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")'
    },
    noItems: {
        fontFamily: "'Montserrat', sans-serif",
        marginTop: '1em',
        marginLeft: '0.5em'
    },

    /* Artwork card */
    profileCardRoot: {
        width: 150,
        margin: '2% 2%',
        paddingBottom: '0.3%',
        textAlign: 'center',
        transition: 'transform 1s',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    },
    profileCardContent: {
        color: theme.palette.text.primary,
        padding: '10px 10px 0',
        '& p': {
            fontSize: '0.6rem',
            color: theme.palette.text.terciary,
            marginTop: 0
        }
    },
    profileCardMedia: {
        minWidth: 100,
        maxWidth: '100%',
        height: 150,
        objectFit: 'contain',
        border: '4px solid',
        borderRadius: '2px',
        boxShadow: 'inset 0 0 1px 4px #fff'
    },
    profileCardFoot: {
        justifyContent: 'center',
        paddingTop: 0,
        '& button': {
            size: 'small',
            color: theme.palette.text.secondary,
            fontSize: '0.5rem'
        }
    },
    spanArtist: {
        textTransform: "capitalize",
    },
}));

export default useStyles;