import React, { Component } from 'react';
import './App.css';
import Random from './components/Random.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Random />
      </div>
    );
  }
}

export default App;
