import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom'
import './App.scss';

import { Header, Main, Footer } from './layout';
import { ThemeColors } from './store/settings';
import { ApplicationState } from './store';

interface AppProps {
  theme: ThemeColors
}

class App extends Component<RouteComponentProps & AppProps> {
  render() {
    return (
      <div className={'App ' + this.props.theme}>
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

const mapStateToProps = ({ settings }: ApplicationState) => ({
  theme: settings.theme
});

export default withRouter(connect(mapStateToProps)(App));
