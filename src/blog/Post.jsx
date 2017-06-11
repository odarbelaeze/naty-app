import React from 'react';
import ReactMarkdown from 'react-markdown';

import * as firebase from 'firebase';


class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postContent: 'Cargando contenido...',
    };
  }
  componentDidMount() {
    const post = firebase.database().ref(`/posts/${this.props.match.params.postId}`);
    post.on('value', snapshot => this.setState({postContent: snapshot.val().content}))
  }
  render() {
    return (
      <ReactMarkdown source={this.state.postContent} />
    );
  }
}


export default Post;
