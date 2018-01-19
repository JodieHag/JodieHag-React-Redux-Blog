import $ from 'jquery';
import { LOGIN_USER, UPDATE_STORE_USER } from '../actions/userActions';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case `${LOGIN_USER}_PENDING`:
      return $.extend({}, state, {
        loading: true,
        login: false
      });

    case `${LOGIN_USER}_FULFILLED`:
      return $.extend({}, state, {
        loading: false,
        loaded: true,
        user: action.payload.data.user
      });

    case `${LOGIN_USER}_REJECT`:
      return $.extend({}, state, {
        loading: false,
        loaded: false,
        user: action.payload.response.data.error
      });
    case UPDATE_STORE_USER:
      return $.extend({}, state, action.users);

    default:
      return $.extend({}, state, {});
  }
}
