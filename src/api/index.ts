import axios from 'axios';

import config from '../utils/constant';

const instance = axios.create({
  baseURL: config.baseUrl,
});

export default instance;
