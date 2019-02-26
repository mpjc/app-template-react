import React, { Component } from 'react';
import './Home.scss';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h3>Home</h3>
        <div className="Home-section">
          <p>Sample React SPA (Single Page Application), implemented in TypeScript.</p>
          <p>Demonstrates simple application structure with the usual basic functionality.</p>
        </div>
        <div className="Home-section Home-features">
          <p>Additional features include:</p>
          <p>Routing with react-router-dom</p>
          <p>Theming with css variables</p>
          <p>And a totally awesome game!</p>
        </div>
        <div className="Home-section">
          <p>
            The icons used are from&nbsp;
          <a href="https://fontawesome.com">Font Awesome</a>.
        </p>
        </div>
      </div>
    );
  }
}

export default Home;