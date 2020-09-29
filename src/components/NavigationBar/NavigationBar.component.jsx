import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';
import styled from 'styled-components';

import { useAuth } from '../../providers/Auth';
import { useSearch } from '../../providers/Search';

const StyledAvatar = styled('img')`
  height: 32px;
  width: 32px;
`;

const StyledAvatarContainer = styled('div')`
  display: flex;
  align-items: center;
`;

function NavigationBar() {
  const [value, setValue] = useState('');
  const { authenticated, logout } = useAuth();
  const { setQuery } = useSearch();
  const history = useHistory();

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit() {
    setQuery(value);
    history.push('/');
  }

  function handleKeypress(event) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <Menu secondary>
      <Menu.Item>
        <Link to="/">Home</Link>
      </Menu.Item>
      {authenticated && (
        <Menu.Item>
          <Link to="/favorites">Favorites</Link>
        </Menu.Item>
      )}
      <Menu.Item>
        <Input
          icon="search"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeypress}
        />
      </Menu.Item>
      <Menu.Menu position="right">
        {authenticated ? (
          <StyledAvatarContainer>
            <Menu.Item name="logout" onClick={deAuthenticate} />
            <StyledAvatar src="https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png" />
          </StyledAvatarContainer>
        ) : (
          <Menu.Item>
            <Link to="/login">login</Link>
          </Menu.Item>
        )}
      </Menu.Menu>
    </Menu>
  );
}

export default NavigationBar;
