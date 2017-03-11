/**
 * Created by rohitgirme on 3/11/17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';

// Having a single component as the main component is good when you
// want to change the structure of the page. Like add a Header or footer.
// All the sub-routes and hence corresponding components are passed to App
// as children through this.props.children.
// IndexRoute is something that shows when the path exactly matches '/'
// and not any other path.
export default (
  <Route path="/" component={App}>
    <IndexRoute component={}/>
  </Route>
);
