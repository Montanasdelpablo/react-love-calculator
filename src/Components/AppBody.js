import React, { Component } from 'react';
import LoveCalculator from '../Providers/LoveCalculator.js';

class AppBody extends Component {
  render() {
    return (
        <div className="App-intro">
            <LoveCalculator />
        </div>
          );
  }
}

export default AppBody;
