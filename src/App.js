import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AuthProvider from './AuthProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hola Natty</h2>
        </div>
        <AuthProvider>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        </AuthProvider>
      </div>
    );
  }
}

export default App;
