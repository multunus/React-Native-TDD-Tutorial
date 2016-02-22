import { types } from './constants';

const initialState = {
  isFetching: false,
  userToken: undefined,
  error: undefined,
};

export default function main(state = initialState, action) {
  switch (action.type) {
  case types.SET_FETCHING:
    return Object.assign({}, state, { isFetching: action.value });
  case types.FETCH_DATA_SUCCESSFUL:
    return Object.assign({}, state, { userToken: action.token });
  case types.FETCH_DATA_FAILED:
    return Object.assign({}, state, { error: action.error });
  default:
    return state;
  }
}
