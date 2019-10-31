import { get } from '../utils/request';

export function getDetail(id) {
  return get(`/products/${id}`);
}
