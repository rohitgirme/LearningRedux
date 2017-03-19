/**
 * Created by rohitgirme on 3/12/17.
 */

import { REQUEST_POSTS, POSTS_FETCHED } from '../actions/index';

const INITIAL_STATE = {posts: [], currentPost: null};

export default function PostListReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_POSTS:
      return state;
    case POSTS_FETCHED:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
