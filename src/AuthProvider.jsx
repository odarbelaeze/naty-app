import React from 'react';
import * as firebase from 'firebase';


class AuthProvider extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: {}, };
  }

  login() {
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_likes');
    firebase.auth().signInWithPopup(provider);
  }

  logout() {
    firebase.auth().signOut();
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user, });
      } else {
        this.setState({ user: {}, })
      }
    })
  }

  render() {
    return React.cloneElement(this.props.children, {
      user: this.state.user,
      login: this.login.bind(this),
      logout: this.logout.bind(this),
    });
  }
}


AuthProvider.propTypes = {
  children: React.PropTypes.any.isRequired,
}


export default AuthProvider;
