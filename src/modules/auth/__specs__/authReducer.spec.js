import { Map } from 'immutable';
import reducer from './../reducer';
import { registerUserSuccess, registerUserFail, setRegistering } from './../actions';

describe('auth reducer', () => {
  it('should set the initial state', () => {
    const initialState = Map({
      isRegistering: false,
      userToken: undefined,
      error: undefined,
    });
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });
  it('should handle SET_REGISTERING', () => {
    expect(reducer(Map(), setRegistering(true))).to.equal(Map({ isRegistering: true }));
  });
  it('should handle REGISTER_USER_SUCCESS', () => {
    expect(reducer(Map(), registerUserSuccess('token'))).to.equal(Map({ userToken: 'token' }));
  });
  it('should handle REGISTER_USER_FAIL', () => {
    expect(reducer(Map(), registerUserFail('error'))).to.equal(Map({ error: 'error' }));
  });
});
