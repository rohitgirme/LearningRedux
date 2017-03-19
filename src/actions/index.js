const ROOT_URL = 'http://reduxblog.herokuapp.com/api/posts';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const POSTS_FETCHED = 'POSTS_FETCHED';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';

export function fetchPosts() {
  let request = fetch(`${ROOT_URL}?key=123asdfsg`, {
    method: 'GET'
  });

  return (dispatch) => {
    dispatch(requestPosts());

    request.then((response) => {

      if (response.status === 200) {

        response.json().then((data) => {
          dispatch(postsFetched(data));
        });

      }

    });
  };
}

export function addPost(post) {
  let request = fetch(ROOT_URL, {
    method: 'POST',
    body: JSON.stringify(post)
  });

  return (dispatch) => {
    // dispatch();
    request.then((response) => {
      if (response.status === 200) {
        dispatch(postAddedSuccess());
      }
    });
  }
}

function postAddedSuccess() {
  return {
    type: ADD_POST_SUCCESS
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