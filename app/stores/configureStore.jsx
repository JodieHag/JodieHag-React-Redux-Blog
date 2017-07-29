import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';

const middleware = applyMiddleware(thunk, promise());

export default createStore(reducers, {
  posts: {
    post: [],
    updating: false,
    updated: false,
    adding: false,
    deleting: false,
    updatingPost: false,
    categories: ['Develop', 'Angy', 'Vagine'],
    update_post: {}
  },
  users: {
    login: true,
    user: [],
    userName: '',
    password: '',
    errors: ''
  },
  common: {
    loading: false,
    loaded: false
  }
}, middleware);
