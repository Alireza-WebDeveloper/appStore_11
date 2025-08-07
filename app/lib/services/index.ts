import axios from 'axios';
import { getCookie, setCookieWithExactDate } from '../utils/document.cookies';
import { getNewsAccessToken } from './auth';
import { stat } from 'fs';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// api.interceptors.request.use
// api.interceptors.response.use

api.interceptors.request.use(
  (config) => {
    const access_token = getCookie('access');
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const status = error.response.data.error.status;
    const config = error.config;

    if (status === 401 && !config._retry) {
      config._retry = true;
      try {
        const refreshToken = getCookie('refresh');
        const response = await getNewsAccessToken({ refreshToken });
        const { accessToken, accessTokenExpire } = response;

        setCookieWithExactDate('access', accessToken, accessTokenExpire);

        config.headers.Authorization = `Bearer ${accessToken}`;

        return api(config);
      } catch (err) {
        return Promise.reject(error);
      }
    } else {
      return Promise.reject(error);
    }
  }
);

export default api;
