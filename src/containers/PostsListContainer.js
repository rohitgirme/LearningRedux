/**
 * Created by rohitgirme on 3/12/17.
 */

import PostsList from '../components/PostsList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts, addPost } from '../actions/index';

function mapStateToProps(state) {
  return {
    posts: state.posts.posts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts, addPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);