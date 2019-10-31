/* eslint-disable vue/valid-v-bind */
<template>
  <div class="list">
    <div class="listItem"
         v-for="item in list"
         :key="item.id">
      <router-link :to="{path: `/detail/${item._id}`}">
        <div>{{item.name}}</div>
      </router-link>
      <button @click="cliakHandle(item)">加入购物车</button>
    </div>
    <button @click="nextPage()"
            class="next">下一页</button>
  </div>
</template>
<script>
import productsPaged from '../service/product';
import { addCart } from '../service/shop_cart';


export default {
  name: 'list',
  data() {
    return {
      list: [],
      page: 1,
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData(page) {
      const res = await productsPaged(page);

      this.list = res.data.products;
      this.page += 1;
    },
    async cliakHandle(item) {
      const res = await addCart(item._id);
      console.log(res);
    },
    nextPage() {
      this.loadData(this.page);
    },
  },
};
</script>
<style lang="scss" scoped>
.listItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  height: 60px;
  border-bottom: 1px solid #ccc;
  div {
    margin-bottom: 10px;
  }
}
.list {
  position: relative;
  .next {
    position: absolute;
    width: 100px;
    height: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
