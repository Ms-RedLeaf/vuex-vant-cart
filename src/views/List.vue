/* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <div class="list"
         v-for="item in list"
         :key="item.id">

      <van-card :price="item.price"
                :desc="item.descriptions"
                :title="item.name"
                :thumb="item.coverImg"
                @click="toDetail(item._id)">

        <div slot="num">
          库存：{{item.quantity}}
        </div>
        <div slot="footer">
          <van-button size="mini"
                      @click="cliakHandle(item)">加入购物车</van-button>
        </div>
      </van-card>
    </div>
    <van-pagination v-model="currentPage"
                    :total-items="125"
                    mode="simple"
                    :show-page-size="5"
                    force-ellipses
                    :page-count='totalPage'
                    @change='nextPage' />
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
      currentPage: 1,
      totalPage: 0,

    };
  },
  created() {
    this.loadData();
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: `/detail/${id}`,
      });
    },
    async loadData() {
      const res = await productsPaged(this.currentPage);
      this.totalPage = res.data.pages;
      this.list = res.data.products;
    },
    async cliakHandle(item) {
      const res = await addCart(item._id);
      console.log(res);
    },
    nextPage() {
      this.loadData();
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
.van-card__num {
  color: pink;
}
</style>
