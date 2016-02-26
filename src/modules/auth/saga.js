/*eslint no-constant-condition: 0*/
import { call, put, take } from 'redux-saga/effects';
import { registerUserRequest, registerUserSuccess, registerUserFail, setRegistering } from './actions';
import { Api } from './../../services/api/api';

export function* registerUser(credentials) {
  yield put(setRegistering(true));
  const response = yield call(Api.registerUser, credentials);
  yield put(setRegistering(false));
  if(response.status === 'SUCCESS')
    yield put(registerUserSuccess(response.data.id_token));
  else
    yield put(registerUserFail(response.data));
}

export default function* authWatcher() {
  while(true) {
    const { credentials } = yield take(registerUserRequest().type);
    yield call(registerUser, credentials);
  }
}
