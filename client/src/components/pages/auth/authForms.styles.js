import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '0 auto',
    background: 'url("https://www.transparenttextures.com/patterns/brick-wall.png")'
  },
  paper: {
    margin: '10px auto',
    padding: '10px 0 50px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '50%',
    minHeight: '600px'
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