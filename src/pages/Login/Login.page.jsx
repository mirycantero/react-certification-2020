import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Button, Form, Grid, Header, Segment, Message } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import './Login.styles.css';

function LoginPage() {
  const { login } = useAuth();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const onLoginClick = () => {
    if (username === 'username' && password === 'password') {
      login();
      history.push('/');
    } else {
      setError('Wrong username and password');
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="red" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button color="red" fluid size="large" onClick={onLoginClick}>
              Login
            </Button>
          </Segment>
        </Form>
        {error && (
          <Message warning>
            <p>{error}</p>
          </Message>
        )}
      </Grid.Column>
    </Grid>
  );
}

export default LoginPage;
