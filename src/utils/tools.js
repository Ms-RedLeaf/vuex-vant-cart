import { addCart } from "../service/shop_cart";
export function getToken() {
  return localStorage.getItem('token');
}

export function setToken(token) {
  localStorage.setItem('token', token);
}

/**
 * 判断加入购物车的
 * @param {*} id 
 */
export function addCartProduct(id,num){
  const cartData=getCart()
  const index=cartData.findIndex(item=>{
    return item.id===id
  })
  if(index !=-1){
    cartData[index].count+=num
  }
  setCart(cartData)
}

export function getCart() {
  return JSON.parse(localStorage.getItem('cart'));
}

export function setCart(cart) {
  localStorage.setItem('cart', cart);
  async function addCartData(){
    const res=await addCart(cart)
  }
}
