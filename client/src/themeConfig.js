import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light:'#5da7b0',
            main: '#35919d',
            dark: '#25656d'
        },
        secondary: {
            main: '#fff59d'
        },
        text: {
            primary: '#35919d',
            secondary: '#fafafa',
            terciary: '#343a40'
        }
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        h1: "'Allura', cursive",
        h2: "'Allura', cursive",
        h3: "'Allura', cursive",
        h4: "'Allura', cursive",
        h5: "'Allura', cursive",
        h6: "'Allura', cursive",
    }
});

export default theme;