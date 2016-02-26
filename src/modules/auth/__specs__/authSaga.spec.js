import { call, put, take } from 'redux-saga/effects';
import authWatcher, { registerUser } from './../saga';
import { registerUserRequest, registerUserSuccess, registerUserFail, setRegistering } from './../actions';
import { Api } from './../../../services/api/api';

describe('auth saga', () => {
  const credentials = {
    username: 'username',
    password: 'password',
  };
  describe('#registerUser', () => {
    let generator;
    beforeEach(() => {
      generator = registerUser(credentials);
    });
    it('must dispatch SET_REGISTERING with true value', () => {
      let next = generator.next();
      expect(next.value).to.deep.equal(put(setRegistering(true)));
    });
    it('must yield Api.registerUser', () => {
      generator.next();
      let next = generator.next();
      expect(next.value).to.deep.equal(call(Api.registerUser, credentials));
    });
    it('must dispatch SET_REGISTERING with false value', () => {
      generator.next();
      generator.next();
      let next = generator.next({});
      expect(next.value).to.deep.equal(put(setRegistering(false)));
    });
    context('on success', () => {
      it('must dispatch REGISTER_USER_SUCCESS with token value', () => {
        generator.next();
        generator.next();
        generator.next({ data: { id_token: 'token' }, status: 'SUCCESS' });
        let next = generator.next();
        expect(next.value).to.deep.equal(put(registerUserSuccess('token')));
      });
    });
    context('on failure', () => {
      it('must dispatch REGISTER_USER_FAIL with error value', () => {
        generator.next();
        generator.next();
        generator.next({ data: 'error', status: 'FAIL' });
        let next = generator.next();
        expect(next.value).to.deep.equal(put(registerUserFail('error')));
      });
    });
  });
  describe('#authWatcher', () => {
    let generator;
    beforeEach(() => {
      generator = authWatcher();
    });
    it('must take REGISTER_USER_REQUEST', () => {
      let next = generator.next();
      expect(next.value).to.deep.equal(take(registerUserRequest().type));
    });
    it('must yield registerUser', () => {
      generator.next();
      let next = generator.next({ credentials });
      expect(next.value).to.deep.equal(call(registerUser, credentials));
    });
  });
});
