import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AuthState from '../context/auth/authState';
import UserState from '../context/user/userState';
import ArtworkState from '../context/artworks/artworkState';
import AlertState from '../context/alert/alertState';
import CartState from '../context/cart/cartState';

import PrivateRoute from './routes/PrivateRoute';
import Navbar from './layout/navBar';
import Home from './pages/home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
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
    <ThemeProvider theme={ theme }>
      <CssBaseline>
        <AlertState>
          <AuthState>
            <UserState>
              <ArtworkState>
                <CartState>
                  <Router>
                    <Navbar />
                    <Switch>
                      <Route exact path='/' component={ Home } />
                      <Route exact path='/signup' component={ Signup } />
                      <Route exact path='/login' component={ Login } />
                      <Route exact path='/artworks' component={ ArtworksList } />
                      <Route exact path='/artworks/details/:artwork_id' component={ ArtworkDetails } />
                      <Route exact path='/cart' component={ Cart } />
                      <PrivateRoute exact path='/profile' component={ UserProfile } />
                    </Switch>
                    <Footer />
                  </Router>
                </CartState>
              </ArtworkState>
            </UserState>
          </AuthState>
        </AlertState>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
