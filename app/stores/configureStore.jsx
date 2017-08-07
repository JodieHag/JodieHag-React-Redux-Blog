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
    added: false,
    deleting: false,
    updatingPost: false,
    category: 'all',
    categories: ['Developer', 'Human Error', 'Feminist', 'Traveling'],
    update_post: {}
  },
  users: {
    login: true,
    user: [],
    userName: '',
    password: '',
    errors: ''
  }
}, middleware);
