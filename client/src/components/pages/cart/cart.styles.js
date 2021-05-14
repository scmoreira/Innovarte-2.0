import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 5),
        marginBottom: '5%',
        textAlign: 'center',
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")',
        '& section': {
            marginTop: '5%'
        },
        '& p': {
            color: theme.palette.text.terciary
        },
    },
    emptyCart: {
        '& a': {
            color: theme.palette.text.primary
        }
    },
    form: {
        marginBottom: theme.spacing(2),
        '& label': {
            color: theme.palette.text.primary
        },
        '& .MuiCheckbox-root': {
            color: theme.palette.primary.main,
        },
    },
    summary: {
        display: 'flex',
        maxWidth: '75%'
    },
}));

export default useStyles;