/**
 * Created by rohitgirme on 3/12/17.
 */

import {
  REQUEST_POSTS,
  POSTS_FETCHED,
  ADD_POST_SUCCESS
} from '../actions/index';

const INITIAL_STATE = {posts: [], currentPost: null};

// For single post or current post we don't want to fetch from existing posts.
// user can directly go to that URL in which case posts will be empty
// some one else updates the post, we are serving stale data from our cache.
export default function PostListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return state;
    case POSTS_FETCHED:
      return { ...state, posts: action.payload.data };
    case ADD_POST_SUCCESS:
      return { ...state, posts: [...action.payload, ...state.posts]};
    default:
      return state;
  }
}
