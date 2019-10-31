import { post } from '../utils/request';

// 登录
export function login(user) {
  return post('/auth/login', user);
}
// 注册
export function reg(user) {
  return post('/auth/reg', user);
}
