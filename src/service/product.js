// 商品列表
import { get } from '../utils/request';

export function productsPaged(page) {
  return get('/products', { page });
}
