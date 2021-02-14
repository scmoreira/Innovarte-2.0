import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3),
        width: '75%',
        textAlign: 'center'
    },
    aboutSection: {
        width: '80%',
        margin: '0 auto',
        '& p': {
                marginTop: '1.5rem',
                marginBottom: '.5rem'
            },
        '& span': {
            fontFamily: "'Allura', cursive",
            fontSize: '1.5rem',
            fontWeight: 'bold'
        }
    },
    howItWorksSection: {
        marginBottom: theme.spacing(10),
        '& .MuiCard-root': {
            maxWidth: 300
        },
        '& svg': {
            fontSize: '2.5rem'
        },
        '& a': {
            color: theme.palette.text.primary,
            textDecoration: 'none'
        },
        '& p': {
            color: theme.palette.text.terciary
        }
    }
}));

export default useStyles;