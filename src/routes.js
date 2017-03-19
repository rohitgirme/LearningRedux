/**
 * Created by rohitgirme on 3/11/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsListContainer from './containers/PostsListContainer';
import AddPostsContainer from './containers/AddPostsContainer';

// Having a single component as the main component is good when you
// want to change the structure of the page. Like add a Header or footer.
// All the sub-routes and hence corresponding components are passed to App
// as children through this.props.children.
// IndexRoute is something that shows when the path exactly matches '/'
// and not any other path.

// Nested routing can be used for nested components and nested paths/urls
export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsListContainer}/>
    <Route path="posts/new" component={AddPostsContainer} />
  </Route>
);
