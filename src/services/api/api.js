import axios from 'axios';
import config from './../../../config.json';

let axiosClient = axios.create({
  baseURL: config.apiURL,
  timeout: 4000,
});

export const Api = {
  registerUser(credentials) {
    return axiosClient.post('/users', credentials)
    .then(response => { return { data: response.data, status: 'SUCCESS' }; })
    .catch(error => { return { data: error.data, status: 'FAIL' }; });
  },
};
