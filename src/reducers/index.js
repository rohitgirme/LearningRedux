import { combineReducers } from 'redux';
import PostListReducer from './PostListReducer';
import {reducer as FormReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostListReducer,
  form: FormReducer
});

export default rootReducer;
