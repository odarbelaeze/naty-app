import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import QRCode from 'qrcode.react';

import _ from 'lodash';

import './App.css';
import './User.css';


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
            <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
            <p className="App-intro">Usuario no registrado</p>
            <Button bsStyle='primary' onClick={this.props.login}>
              <i className="fa fa-facebook-official" aria-hidden="true"></i> Conectate con facebook
            </Button>
          </div>
        ) : (
          <div className='App-container'>
            <img
              className='User-photo'
              src={this.props.user.photoURL}
              alt={`user ${this.props.user.email}`}
            />
            <p className="App-intro">{this.props.user.displayName} es lind@</p>
            <Button bsStyle='primary' onClick={this.props.logout}>
              <i className="fa fa-facebook-official" aria-hidden="true"></i> Logout
            </Button>
            <p>
              <QRCode
                value={`Esto no hace nada, pero ${this.props.user.displayName} es lindo`}
                bgColor='transparent'
              />
            </p>
          </div>
          )}
      </div>
    );
  }
}

export default App;
