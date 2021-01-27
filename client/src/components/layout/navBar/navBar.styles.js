import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row'
    },
    offset: theme.mixins.toolbar,
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    navBrand: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    brandLogo: {
        marginRight: theme.spacing(2),
        '@media (max-width: 900px)': {
            display: 'none'
        }
    },
    brandLink: {
        fontFamily: "'Allura', cursive",
        fontWeight: 700,
        fontSize: '1.6rem',
        textTransform: 'lowercase',
        '&:hover': {
            color: 'inherit',
        },
        '@media (max-width: 900px)': {
            fontSize: '2rem',
        }
    },
    navLinks: {
        size: '18px',
        marginLeft: '38px',
        '&:hover': {
            color: 'inherit',
        }
    },
    logout: {
        size: '18px',
        marginLeft: '38px',
        '&:hover': {
            color: theme.palette.error.main,
        },
        '@media (max-width: 900px)': {
            color: 'red',
            textTransform: 'none',
            marginLeft: -28,
            padding: '20px '
        }
    },
    cart: {
        color: 'inherit',
        '&:hover': {
            color: 'inherit',
        }        
    },
    badge: {
        right: -3,
        top: 0,
        padding: '0 2px',
        '@media (max-width: 900px)': {
            right: 0,
            left: -25
        }
    },
    drawContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        padding: '20px 25px'
    }
}));

export default useStyles;
