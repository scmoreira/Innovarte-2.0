import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#7ce0d3'
        },
        secondary: {
            main: '#fff59d'
        }
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        h1: "'Allura', cursive",
        h2: "'Allura', cursive",
        h3: "'Allura', cursive",
        h4: "'Allura', cursive",
        h5: "'Allura', cursive",
        h6: "'Allura', cursive"
    }
});

export default theme;