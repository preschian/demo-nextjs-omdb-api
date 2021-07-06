import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: 'ae4df36d',
  },
});

export const apiSearch = (s = 'marvel', config = {}) => {
  return api.get('/', {
    params: {
      s,
      ...config,
    },
  });
};

export default api;
