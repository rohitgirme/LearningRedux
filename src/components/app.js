import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <p>Posts</p>
        {this.props.children}
      </div>
    );
  }
}
