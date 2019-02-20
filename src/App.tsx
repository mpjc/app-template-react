import React, { Component } from 'react';
import './App.scss';

import { Header, Main, Footer } from './layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Header />
          <Main />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
