import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    offset: theme.mixins.toolbar,
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    toolbarActive: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.main
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
            color: theme.palette.primary.dark,
        },
        '@media (max-width: 900px)': {
            fontSize: '2rem',
        }
    },
    navLinks: {
        size: '18px',
        fontWeight: 700,
        padding: '6px 20px',
        '&:hover': {
            color: theme.palette.primary.dark,
        }
    },
    logout: {
        size: '18px',
        marginLeft: '38px',
        fontWeight: 700,
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
        marginLeft: '50px',
        '& a': {
            color: theme.palette.primary.main
        },
        '&:hover': {
            color: theme.palette.primary.dark,
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
        alignItems: 'center',
        padding: '20px 25px'
    },
    menuIcon: {
        color: theme.palette.primary.main,
    },
    active: {
        color: theme.palette.text.secondary
    }
}));

export default useStyles;
