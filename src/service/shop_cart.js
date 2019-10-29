import { get, post } from "../utils/request";

/**
 *获取购物车数据
 */
export function allCart() {
  return get("/shop_carts");
}

/**
 * 加入购物车
 * @param {*} product
 */
export function addCart(product) {
  return post("/shop_carts", { product });
}
