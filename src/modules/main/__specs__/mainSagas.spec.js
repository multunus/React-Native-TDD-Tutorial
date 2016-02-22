import { call, put, take } from 'redux-saga/effects';
import { types } from './../constants';
import mainWatcher, { fetchData } from './../saga';
import { fetchDataSuccess, fetchDataFail, setFetching } from './../actions';
import { Api } from './../../../services/api/api';

describe('fetchData sagas', () => {
  describe('#fetchData', () => {
    let generator;
    beforeEach(() => {
      generator = fetchData();
    });
    it('must dispatch SET_FETCHING with true value', () => {
      let next = generator.next();
      expect(next.value).to.deep.equal(put(setFetching(true)));
    });
    it('must yield Api.fetchData', () => {
      generator.next();
      let next = generator.next();
      expect(next.value).to.deep.equal(call(Api.fetchData));
    });
    it('must dispatch SET_FETCHING with false value', () => {
      generator.next();
      generator.next();
      let next = generator.next({ data: '', status: '' });
      expect(next.value).to.deep.equal(put(setFetching(false)));
    });
    context('on success', () => {
      it('must dispatch FETCH_DATA_SUCCESSFUL with token value', () => {
        generator.next();
        generator.next();
        generator.next({ data: '', status: 'SUCCESS' });
        let next = generator.next();
        expect(next.value).to.deep.equal(put(fetchDataSuccess('')));
      });
    });
    context('on failure', () => {
      it('must dispatch FETCH_DATA_FAILED with error value', () => {
        generator.next();
        generator.next();
        generator.next({ data: '', status: 'FAIL' });
        let next = generator.next();
        expect(next.value).to.deep.equal(put(fetchDataFail('')));
      });
    });
  });
  describe('#mainWatcher', () => {
    let generator;
    beforeEach(() => {
      generator = mainWatcher();
    });
    it('must take FETCH_DATA_REQUEST', () => {
      let next = generator.next();
      expect(next.value).to.deep.equal(take(types.FETCH_DATA_REQUEST));
    });
    it('must yield fetchData', () => {
      generator.next();
      let next = generator.next();
      expect(next.value).to.deep.equal(call(fetchData));
    });
  });
});
