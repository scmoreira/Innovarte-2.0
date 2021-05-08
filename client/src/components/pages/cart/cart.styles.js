import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(4, 5),
        marginBottom: '5%',
        textAlign: 'center',
        '& section': {
            marginTop: '5%'
        },
        '& p': {
            color: theme.palette.text.terciary
        }
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
        }
    },
    checkbox: {
        color: theme.palette.primary.main
    },
    spanUser: {
        textTransform: "capitalize"
    },
}));

export default useStyles;