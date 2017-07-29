import { combineReducers } from 'redux';
import blog from './blog';
import user from './user';

export default combineReducers({ posts: blog, users: user });
