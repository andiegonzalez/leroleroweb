import React from 'react';
import Search from './Search';

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <img className="nav-logo"/>
        <Search />
        <button className="login-btn">Log In</button>
      </nav>
    );
  }
}

export default Navbar;
