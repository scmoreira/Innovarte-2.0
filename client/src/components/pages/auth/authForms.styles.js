import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    paper: {
      margin: theme.spacing(10, 12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '75%'
    },
    avatar: {
      margin: theme.spacing(1),
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
}));

export default useStyles;
