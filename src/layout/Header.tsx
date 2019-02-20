import React, { Component } from 'react';
import './Header.scss';

import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div id="nav">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
          <span>|</span>
          <Link to="/list">
            <i className="fas fa-tasks"></i>
          </Link>
          <span>|</span>
          <Link to="/game">
            <i className="fas fa-gamepad"></i>
          </Link>
          <span>|</span>
          <Link to="/settings">
            <i className="fas fa-cog"></i>
          </Link>
        </div>
      </header>
    );
  }
}

export default Header;