import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import AuthProvider from '../../providers/Auth';
import FavoritesProvider from '../../providers/Favorites';
import SearchProvider from '../../providers/Search';
import Favorites from '../../pages/Favorites';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetails from '../../pages/VideoDetails';
import NavigationBar from '../NavigationBar';
import Private from '../Private';
import { API_KEY } from '../../utils/constants';

function App() {
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        setIsClientLoaded(true);
      });
    };

    document.body.appendChild(script);
  });

  if (!isClientLoaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <SearchProvider>
          <FavoritesProvider>
            <Container>
              <NavigationBar />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Private exact path="/favorites" component={Favorites} />
                <Private exact path="/secret" component={SecretPage} />
                <Route exact path="/:id" component={VideoDetails} />
                <Route path="*" component={NotFound} />
              </Switch>
            </Container>
          </FavoritesProvider>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
