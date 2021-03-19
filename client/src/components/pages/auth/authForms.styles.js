import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  paper: {
    margin: '80px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '50%'
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
    '& label': {
      color: theme.palette.text.primary
    }
  },
  radio: {
    color: theme.palette.primary.main
  },
  checkbox: {
    color: theme.palette.primary.main
  }
}));

export default useStyles;