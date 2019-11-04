<template>
  <div class="shop-cart">6789879009</div>
</template>

<script>
import { allCart } from '../service/shop_cart';

export default {
  name: 'shopCart',
  data() {
    return {
      cartData: {},
    };
  },
  created() {
    this.allCartProduct();
  },
  methods: {
    async allCartProduct() {
      const res = await allCart();
      console.log(res);
    },
  },
  activated() {
    this.allCartProduct();
  },
};
</script>
<style lang="scss" scoped>
.shop-cart {
  // app.vue中transition过渡动画需要这几个页面脱离文档流，要不然两个会挤着
  position: absolute;
}
</style>
