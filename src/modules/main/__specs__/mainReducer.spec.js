import { fetchDataSuccess, fetchDataFail, setFetching } from './../actions';
import reducer from './../reducer';

describe('fetchData reducer', () => {
  it('fetchData state should exist', () => {
    expect(reducer(undefined, {})).to.exist;
  });
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.deep.equal({ isFetching: false, userToken: undefined, error: undefined });
  });
  it('should handle SET_FETCHING', () => {
    expect(reducer({}, setFetching(true)).isFetching).to.equal(true);
  });
  it('should handle FETCH_DATA_SUCCESSFUL', () => {
    expect(reducer({}, fetchDataSuccess('token')).userToken).to.equal('token');
  });
  it('should handle FETCH_DATA_FAIL', () => {
    expect(reducer({}, fetchDataFail('error')).error).to.equal('error');
  });
});
