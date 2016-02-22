import { Map } from 'immutable';
import { types } from './constants';

const initialState = Map({
  isFetching: false,
  userToken: undefined,
  error: undefined,
});

export default function main(state = initialState, action) {
  switch (action.type) {
  case types.SET_FETCHING:
    return state.set('isFetching', action.value);
  case types.FETCH_DATA_SUCCESSFUL:
    return state.set('userToken', action.token);
  case types.FETCH_DATA_FAILED:
    return state.set('error', action.error);
  default:
    return state;
  }
}
