import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';

import AppMenu from './AppMenu';

import './App.css';



class App extends Component {
  render() {
    console.log(this.props.user);
    console.log(this.props.user.credential);
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
            <div className="App-landing">
              <img
                className='App-big-logo'
                src={process.env.PUBLIC_URL + '/logo.png'}
                alt="logo" />
              <button
                className='App-facebook-button'
                onClick={this.props.login}
              >
                <img src="/images/facebook-official.png" alt="facebook icon" />
                Conéctate con Facebook
              </button>
            </div>
          </div>
        ) : (
            <Router>
              <div className='App-container'>
                <Route exact path='/' component={AppMenu} />
              </div>
            </Router>
          )}
      </div>
    );
  }
}

export default App;
