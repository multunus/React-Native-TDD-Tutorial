import { Map } from 'immutable';
import { types } from './constants';

const initialState = Map({
  isRegistering: false,
  userToken: undefined,
  error: undefined,
});

export default function auth(state = initialState, action) {
  switch (action.type) {
  case types.SET_REGISTERING:
    return state.set('isRegistering', action.value);
  case types.REGISTER_USER_SUCCESS:
    return state.set('userToken', action.token);
  case types.REGISTER_USER_FAIL:
    return state.set('error', action.error);
  default:
    return state;
  }
}
