import React, { Component } from 'react';
import './Header.scss';

import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div id="nav">
          <NavLink exact={true} activeClassName='is-active' to="/">
            <i className="fas fa-home"></i>
          </NavLink>
          <span>|</span>
          <NavLink activeClassName='is-active' to="/list">
            <i className="fas fa-tasks"></i>
          </NavLink>
          <span>|</span>
          <NavLink activeClassName='is-active' to="/game">
            <i className="fas fa-gamepad"></i>
          </NavLink>
          <span>|</span>
          <NavLink activeClassName='is-active' to="/settings">
            <i className="fas fa-cog"></i>
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;