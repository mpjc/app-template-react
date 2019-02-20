import React, { Component } from 'react';
import './Main.scss';

import Home from '../features/Home';
import { Route } from 'react-router';
import Game from '../features/Game/Game';
import Settings from '../features/Settings/Settings';
import List from '../features/List/List';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
        <Route exact path="/list" component={List} />
        <Route exact path="/settings" component={Settings} />
      </main>
    );
  }
}

export default Main;