import axios from 'axios';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const UPDATE_STORE_USER = 'UPDATE_STORE_USER';

export function updateStoreUser(users) {
  return {
    type: UPDATE_STORE_USER,
    users
  };
}

export function loguinUser() {
  return {
    type: LOGIN_USER,
    payload: axios.get('/api/user')
  };
}
