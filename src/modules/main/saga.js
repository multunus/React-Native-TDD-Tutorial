/*eslint no-constant-condition: 0*/
import { types } from './constants';
import { call, put, take } from 'redux-saga/effects';
import { fetchDataSuccess, fetchDataFail, setFetching } from './actions';
import { Api } from './../../services/api/api';

export function* fetchData() {
  yield put(setFetching(true));
  const response = yield call(Api.fetchData);
  yield put(setFetching(false));
  if(response.status === 'SUCCESS')
    yield put(fetchDataSuccess(response.data));
  else
    yield put(fetchDataFail(response.data));
}

export default function* mainWatcher() {
  while (true) {
    yield take(types.FETCH_DATA_REQUEST);
    yield call(fetchData);
  }
}
