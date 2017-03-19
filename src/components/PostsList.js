/**
 * Created by rohitgirme on 3/12/17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router';

export default class PostsList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        <Link className="btn btn-primary" to="/posts/new">
          Add Post
        </Link>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <li>{post.title}</li>
      );
    });
  }

}