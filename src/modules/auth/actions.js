import { types } from './constants';

export function registerUserRequest(credentials) {
  return {
    type: types.REGISTER_USER_REQUEST,
    credentials,
  };
}

export function registerUserSuccess(token) {
  return {
    type: types.REGISTER_USER_SUCCESS,
    token,
  };
}

export function registerUserFail(error) {
  return {
    type: types.REGISTER_USER_FAIL,
    error,
  };
}

export function setRegistering(value) {
  return {
    type: types.SET_REGISTERING,
    value,
  };
}
