/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken } from './tools';

const instance = axios.create({
  timeout: 5000,
  baseURL: 'https://api.cat-shop.penkuoer.com/api/v1',
});
instance.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${getToken()}`; // 设置请求头
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  response => response,

  (error) => {
    console.dir(error); // eslint-disable-line
    if (error.response.status === 401) {
      // 如果报错401未授权，说明需要token值，就跳转登录页
      window.location.href = '/user';
    }
    return Promise.reject(error);
  },
);
export function get(url, params) {
  return instance.get(url, {
    params,
  });
}

export function post(url, data) {
  return instance.post(url, data);
}
