import { get } from '../utils/request';

export default function getDetail(id) {
  return get(`/products/${id}`);
}
