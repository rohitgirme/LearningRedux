import axios from 'axios';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_FETCHED = 'POSTS_FETCHED';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const API_KEY = '123xyzwasdsasd';

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export function fetchPosts() {
  let request = axios.get(`${ROOT_URL}?key=${API_KEY}`);

  return (dispatch) => {
    dispatch(requestPosts());

    return request.then((response) => {

      dispatch(postsFetched(response));

    });
  };
}

export function addPost(post) {
  let request = axios.post(`${ROOT_URL}?key=${API_KEY}`, post);

  return (dispatch) => {
    // dispatch();
    return request.then((response) => {
      dispatch(postAddedSuccess(response));
    });
  }
}

function postAddedSuccess(post) {
  return {
    type: ADD_POST_SUCCESS,
    payload: [post]
  }
}

function requestPosts() {
  return {
    type: REQUEST_POSTS
  }
}

function postsFetched (posts) {
  return {
    type: POSTS_FETCHED,
    payload: posts
  }
}