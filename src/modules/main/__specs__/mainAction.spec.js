import { fetchDataRequest, fetchDataSuccess, fetchDataFail, setFetching } from './../actions';
import { types } from './../constants';

describe('fetchData actions', () => {
  describe('#fetchDataRequest', () => {
    it('should create an action of type FETCH_DATA_REQUEST', () => {
      const expectedAction = {
        type: types.FETCH_DATA_REQUEST,
      };
      expect(fetchDataRequest()).to.deep.eql(expectedAction);
    });
  });
  describe('#fetchDataSuccess', () => {
    it('should create an action of type FETCH_DATA_SUCCESSFUL with token', () => {
      const expectedAction = {
        type: types.FETCH_DATA_SUCCESSFUL,
        token: 'reponse',
      };
      expect(fetchDataSuccess('reponse')).to.deep.eql(expectedAction);
    });
  });
  describe('#fetchDataFail', () => {
    it('should create an action of type FETCH_DATA_FAILED with error', () => {
      const expectedAction = {
        type: types.FETCH_DATA_FAILED,
        error: 'error',
      };
      expect(fetchDataFail('error')).to.deep.eql(expectedAction);
    });
  });
  describe('#setFetching', () => {
    it('should create an action of type SET_FETCHING with value', () => {
      const expectedAction = {
        type: types.SET_FETCHING,
        value: true,
      };
      expect(setFetching(true)).to.deep.eql(expectedAction);
    });
  });
});
