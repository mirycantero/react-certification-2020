import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import SearchProvider from '../../providers/Search';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import VideoDetails from '../../pages/VideoDetails';
import Private from '../Private';
import Layout from '../Layout';
import NavigationBar from '../NavigationBar';

const API_KEY = 'YOURAPIKEYHERE';

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
          <Layout>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Private exact path="/favorites">
                <SecretPage />
              </Private>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route exact path="/:id" component={VideoDetails} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </SearchProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
