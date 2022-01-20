import React from 'react';
import { NavLink } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <NavLink to="/">
          <h1>Deep Thoughts</h1>
        </NavLink>

        <nav className="text-center">
          {Auth.loggedIn() ? (
          <>
          <NavLink to="/profile">Me</NavLink>
          <a href="/" onClick={logout}>
            Logout
          </a>
          </>
          ) : (
          <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Signup</NavLink>
          </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
