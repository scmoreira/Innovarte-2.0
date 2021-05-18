import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

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
        width: 180,
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

    /* New artwork form */
    newArtworkRoot: {
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
    newArtworkPaper: {
        margin: '10px auto',
        padding: '10px 0 50px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '75%',
        minHeight: '600px'
    },
    newArtworkForm: {
        width: '100%',
        marginTop: theme.spacing(3),
        '& label': {
            color: theme.palette.text.primary
        }
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px'
    }
}));

export default useStyles;