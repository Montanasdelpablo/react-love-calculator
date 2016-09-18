import React, { Component } from 'react';
import logo from '../logo.svg';


class AppHeader extends Component {
  render() {
    return (
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Messing around in React</h2>
          </div>
          );
  }
}

export default AppHeader;
