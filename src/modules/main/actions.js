import { types } from './constants';

export function fetchDataRequest() {
  return(
    {
      type: types.FETCH_DATA_REQUEST,
    }
  );
}

export function fetchDataSuccess(token) {
  return(
    {
      type: types.FETCH_DATA_SUCCESSFUL,
      token,
    }
  );
}

export function fetchDataFail(error) {
  return(
    {
      type: types.FETCH_DATA_FAILED,
      error,
    }
  );
}

export function setFetching(value) {
  return(
    {
      type: types.SET_FETCHING,
      value,
    }
  );
}
