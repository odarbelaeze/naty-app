import React, { Component } from 'react';
import './App.css';
import './User.css';
import _ from 'lodash';


class App extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="App">
        <div className="App-header">
          <h1>
           <img
            src={process.env.PUBLIC_URL + '/text-logo.png'}
            alt="# Yo soy ansermeño de corazón"
           />
          </h1>
        </div>
        {_.isEmpty(this.props.user) ? (
          <div className='App-container'>
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
            <p className="App-intro">Usuario no registrado</p>
            <button onClick={this.props.login}>
              Login
              </button>
          </div>
        ) : (
          <div className='App-container'>
            <img
              className='User-photo'
              src={this.props.user.photoURL}
              alt={`user ${this.props.user.email}`}
            />
            <p className="App-intro">Usuario registrado</p>
            <button onClick={this.props.logout}>
              Logout
              </button>
          </div>
          )}
      </div>
    );
  }
}

export default App;
