import { get } from '../utils/request';

// 获取商品详情
export default function getDetail(id) {
  return get(`/products/${id}`);
}
