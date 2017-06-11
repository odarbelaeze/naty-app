import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import _ from 'lodash';

import AppMenu from './AppMenu';
import Content from './Content';
import Post from './blog/Post';

import './App.css';



class App extends Component {
  render() {
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
                <Route exact path='/contenido' component={Content} />
                <Route path='/contenido/:postId' component={Post} />
              </div>
            </Router>
          )}
      </div>
    );
  }
}

export default App;
