import $ from 'jquery';
import { LOAD_POSTS,
        ADD_POST,
        GET_POST,
        DELETE_POST,
        UPDATE_POST,
        UPDATE_STORE_POSTS } from '../actions/blogActions';

export default function reducer(state = {}, action) {
  switch (action.type) {

    case UPDATE_STORE_POSTS:
      return $.extend({}, state, action.posts);

    case `${LOAD_POSTS}_PENDING`:
      return $.extend({}, state, {
        updating: true
      });

    case `${LOAD_POSTS}_FULFILLED`:
      return $.extend({}, state, {
        updating: false,
        updated: true,
        post: action.payload.data.post
      });

    case `${ADD_POST}_PENDING`:
      return $.extend({}, state, {
        updating: true,
        added: false
      });

    case `${ADD_POST}_FULFILLED`:
      return $.extend({}, state, {
        updating: false,
        added: true
      });

    case `${LOAD_POSTS}_REJECT`:
      return $.extend({}, state, {
        updating: false,
        updated: false,
        post: action.payload.response.data.error
      });

    case `${GET_POST}_PENDING`:
      return $.extend({}, state, {
        updating: true
      });

    case `${GET_POST}_FULFILLED`:
      return $.extend({}, state, {
        updating: false,
        updated: true,
        update_post: action.payload.data.post[0]
      });

    case `${UPDATE_POST}_PENDING`:
      return $.extend({}, state, {
        updating: true
      });

    case `${UPDATE_POST}_FULFILLED`:
      return $.extend({}, state, {
        updating: false,
        updated: true,
        post: action.payload.data.post
      });

    case `${DELETE_POST}_PENDING`:
      return $.extend({}, state, {
        updating: true
      });

    case `${DELETE_POST}_FULFILLED`:
      return $.extend({}, state, {
        updating: false,
        updated: true,
        post: action.payload.data.post
      });
    default:
      return $.extend({}, state, {});
  }
}
