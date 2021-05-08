import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

    /* Atworks List */
    artworksListRoot: {
        margin: '1% auto',
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")'
    },

    /* Form */
    formContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing(3),
        minWidth: 200,
        '& label': {
            color: theme.palette.text.primary
        }
    },
    
    /* Artwork card */
    cardRoot: {
        maxWidth: 400,
        height: 'auto',
        margin: '2% 0',
        textAlign: 'center',

        '&:hover': {
            transform: 'scale(1.1)',
        }
    },
    cardContent: {
        paddingBottom: 0,
        color: theme.palette.text.terciary
    },
    cardMedia: {
        maxWidth: '100%',
        height: 200,
        objectFit: 'contain',
        border: '0.3vw solid',
        borderRadius: '2px',
        boxShadow: 'inset 0 0 1px 4px #fff'
    },
    cardFoot: {
        justifyContent: 'center',
        paddingTop: 0,
        '& button': {
            size: 'small',
            color: theme.palette.text.terciary
        }
    },

    spanArtist: {
        textTransform: "capitalize",
    },

    /* Artwork details */
    detailsContainer: {
        position: 'absolute',
        top: '10%',
        left: '20%',
        width: '60%',
        backgroundColor: theme.palette.background.paper,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")',
        border: `0.2vw solid ${theme.palette.primary.main}`,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4, 4, 1)
    },
    detailsImg: {
        width: '75%',
        height: '90%',
        objectFit: 'cover',
        padding: '1%',
        border: `0.5vw solid ${theme.palette.primary.main}`,
        borderRadius: '2px',
        boxShadow: 'inset 0 0 1px 4px #fff'
    },
    detailsContent: {
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center'
    },
    btnContainer: {
        width: '100%',
        justifyContent: 'space-evenly'
    }
}));

export default useStyles;