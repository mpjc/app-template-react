import React, { Component } from 'react';
import './Main.scss';

import Home from '../features/Home';
import { Route } from 'react-router';
import Game from '../features/Game/Game';
import List from '../features/List/List';
import SettingsContainer from '../features/Settings/SettingsContainer';

class Main extends Component {
  render() {
    return (
      <main className="Main">
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/list" component={List} />
        <Route path="/settings" component={SettingsContainer} />
      </main>
    );
  }
}

export default Main;