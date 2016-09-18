import React, { Component } from 'react';
import AppHeader from './Components/AppHeader.js';
import AppBody from './Components/AppBody.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <AppHeader />

        <AppBody />

      </div>
    );
  }
}

export default App;
