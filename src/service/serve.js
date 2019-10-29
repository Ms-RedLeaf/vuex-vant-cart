import { get, post } from "../utils/request";

export function getDetail(id){
  return get(`/products/${id}`)
}
