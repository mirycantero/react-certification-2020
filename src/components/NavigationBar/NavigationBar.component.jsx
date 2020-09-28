import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

import { useAuth } from '../../providers/Auth';
import { useSearch } from '../../providers/Search';

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
          <Menu.Item name="logout" onClick={deAuthenticate} />
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
