import React, { Component } from 'react';
import './App.css';
import './User.css';
import _ from 'lodash';


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
                <img src="/images/facebook-official.png" alt="facebook icon"/>
                Conéctate con Facebook
              </button>
            </div>
          </div>
        ) : (
            <div className='App-container'>
              <img
                className='User-photo'
                src={this.props.user.photoURL}
                alt={`user ${this.props.user.email}`}
              />
              <p className="App-intro">{this.props.user.displayName} es lind@</p>
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
