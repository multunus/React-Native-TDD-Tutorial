import { Map } from 'immutable';
import { fetchDataSuccess, fetchDataFail, setFetching } from './../actions';
import reducer from './../reducer';

describe('main reducer', () => {
  it('should set the initial state', () => {
    let initialState = Map({
      isFetching: false,
      userToken: undefined,
      error: undefined,
    });
    expect(reducer(undefined, {})).to.deep.equal(initialState);
  });
  it('should handle SET_FETCHING', () => {
    expect(reducer(Map(), setFetching(true))).to.equal(Map({ isFetching: true }));
  });
  it('should handle FETCH_DATA_SUCCESSFUL', () => {
    expect(reducer(Map(), fetchDataSuccess('token'))).to.equal(Map({ userToken: 'token' }));
  });
  it('should handle FETCH_DATA_FAIL', () => {
    expect(reducer(Map(), fetchDataFail('error'))).to.equal(Map({ error: 'error' }));
  });
});
