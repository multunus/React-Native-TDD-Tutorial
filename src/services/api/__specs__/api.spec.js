import { Api } from './../api';
import nock from 'nock';

describe('Api', () => {
  describe('#fetchData', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    context('on success', () => {
      it('gives a reponse object with status SUCCESS', () => {
        nock('http://swapi.co/api/')
        .get('/people/1')
        .reply(200, {});
        const response = Api.fetchData();
        return expect(response).to.eventually.deep.equal({ data: {}, status: 'SUCCESS' });
      });
    });
    context('on failure', () => {
      it('gives a reponse object with status FAIL', () => {
        nock('http://swapi.co/api/')
        .get('/people/1')
        .reply(404, {});
        const response = Api.fetchData();
        return expect(response).to.eventually.deep.equal({ data: {}, status: 'FAIL' });
      });
    });
  });
});
