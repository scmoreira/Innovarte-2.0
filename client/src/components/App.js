import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthState from '../context/auth/authState';
//import UserState from '../context/user/userState';
import ArtworkState from '../context/artworks/artworkState';

import Navbar from './layout/navBar';
import Home from './pages/home';
import AuthForms from './pages/auth';
import ArtworksList from './pages/artworks/ArtworksList';
import ArtworkDetails from './pages/artworks/ArtworkDetails';
import UserProfile from './pages/userProfile/';
import Cart from './pages/cart';
import Footer from './layout/Footer';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../themeConfig';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AuthState>
          {/* <UserState> */}
            <ArtworkState>
                <Router>
                  <Navbar />
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={AuthForms} />
                    <Route exact path='/login' component={AuthForms} />
                    <Route exact path='/artworks' component={ArtworksList} />
                    <Route exact path='/artworks/details/:artwork_id' component={ArtworkDetails} />
                    <Route exact path='/profile' component={UserProfile} />
                    <Route exact path='/cart' component={Cart} />
                  </Switch>
                  <Footer />
                </Router>
            </ArtworkState>
          {/* </UserState> */}
        </AuthState>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
