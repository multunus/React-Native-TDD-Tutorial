import { types } from './../constants';
import { registerUserRequest, registerUserSuccess, registerUserFail, setRegistering } from './../actions';

describe('registerUser actions', () => {
  describe('#registerUserRequest', () => {
    it('should create an action of type REGISTER_USER_REQUEST', () => {
      const expectedAction = {
        type: types.REGISTER_USER_REQUEST,
        credentials: { username: 'username', password: 'password' },
      };
      expect(registerUserRequest({ username: 'username', password: 'password' })).to.deep.eql(expectedAction);
    });
  });
  describe('#registerUserSuccess', () => {
    it('should create an action of type REGISTER_USER_SUCCESS', () => {
      const expectedAction = {
        type: types.REGISTER_USER_SUCCESS,
        token: 'token',
      };
      expect(registerUserSuccess('token')).to.deep.equal(expectedAction);
    });
  });
  describe('#registerUserFail', () => {
    it('shoud create an action of type REGISTER_USER_FAIL', () => {
      const expectedAction = {
        type: types.REGISTER_USER_FAIL,
        error: 'error',
      };
      expect(registerUserFail('error')).to.deep.equal(expectedAction);
    });
  });
  describe('#setRegistering', () => {
    it('shoud create ana action of type SET_REGISTERING', () => {
      const expectedAction = {
        type: types.SET_REGISTERING,
        value: true,
      };
      expect(setRegistering(true)).to.deep.equal(expectedAction);
    });
  });
});
