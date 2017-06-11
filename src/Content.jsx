import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';

import * as firebase from 'firebase';
import _ from 'lodash';


const POST = `
# Este es un titulo de post

## Este es un subtitulo

Hola que hace, este es mi primer post.

[este link](link)

oscar es re lindo

![super imagen](http://alternativa.com.co/wp-content/uploads/2016/11/AltavozFest2016_Claxon_LexArtis-20-1.jpg)
`;


class PostCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postContent: POST
    };
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <form onSubmit={this.createPost.bind(this)}>
          <textarea
            name="postContent" id="postContent"
            style={{ width: 500, height: 300 }}
            value={this.state.postContent}
            onChange={e => this.setState({ postContent: e.target.value })}
          >
          </textarea>
          <input type="submit" value='Crear!' />
        </form>
        <ReactMarkdown source={this.state.postContent} />
      </div>
    )
  }

  createPost(e) {
    e.preventDefault();
    const db = firebase.database();
    const posts = db.ref('/posts');
    const postKey = posts.push().key;
    db.ref(`/posts/${postKey}`).set({content: this.state.postContent});
  }
}


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {postList: []};
  }

  componentDidMount() {
    firebase.database().ref('/posts').on('value', snap => {
      this.setState({postList: snap.val()});
    })
  }

  render() {
    return (
      <div className='Content-wrapper'>
        <div>
          <h1>Super Blog de Naty</h1>
          <PostCreator />
          <ul>
            {_.map(this.state.postList, (post, key) => <li key={key}>
              <Link to={`/contenido/${key}`}>{key}</Link>
            </li>)}
          </ul>
        </div>
      </div>
    );
  }
}


export default Content;
