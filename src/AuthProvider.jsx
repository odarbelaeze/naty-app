import React from 'react';
import * as firebase from 'firebase';
import _ from 'lodash';


class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  login() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(
      result => {
        console.log(result);
      }
    ).catch(
      error => {
        console.log(error);
      }
      )
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        this.setState({
          user: firebaseUser,
        });
      } else {
        this.setState({
          user: {},
        })
      }
    })
  }

  render() {
    return _.isEmpty(this.state.user) ? (
      <div>
        <button onClick={this.login.bind(this)}>Login</button>
      </div>
    ) : this.props.children;
  }
}


export default AuthProvider;
