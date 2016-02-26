import { Api } from './../api';
import nock from 'nock';
import config from './../../../../config.json';

describe('Api', () => {
  describe('#registerUser', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    context('on success', () => {
      const credentials = {
        username: 'username',
        password: 'password',
      };
      it('gives a response object with status SUCCESS', () => {
        nock(config.apiURL)
        .post('/users', credentials)
        .reply(200, { id_token: 'token' });
        const response = Api.registerUser(credentials);
        return expect(response).to.eventually.deep.equal({ data: { id_token: 'token' }, status: 'SUCCESS' });
      });
    });
    context('on failure', () => {
      const credentials = {
        username: 'username',
        password: 'password',
      };
      it('gives a response object with status FAIL', () => {
        nock(config.apiURL)
        .post('/users', credentials)
        .reply(404, { error: 'error' });
        const response = Api.registerUser(credentials);
        return expect(response).to.eventually.deep.equal({ data: { error: 'error' }, status: 'FAIL' });
      });
    });
  });
});
