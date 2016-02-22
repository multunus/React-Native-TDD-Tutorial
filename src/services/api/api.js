import axios from 'axios';

export const Api = {
  fetchData() {
    return axios({
      url: 'http://swapi.co/api/people/1',
      timeout: 20000,
      method: 'get',
    })
    .then(response => { return { data: response.data, status: 'SUCCESS' }; })
		.catch(error => { return { data: error.data, status: 'FAIL' }; });
  },
};
