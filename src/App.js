import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';

import HomePoints from './containers/HomePoints/HomePoints.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HomePoints />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
