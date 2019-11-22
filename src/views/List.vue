/* eslint-disable vue/valid-v-bind */
<template>
  <div>
    <div class="list"
         v-for="item in list"
         :key="item.id">

      <van-card :price="item.price"
                :desc="item.descriptions"
                :title="item.name"
                :thumb="item.coverImg?item.coverImg:defaltImg"
                @click="toDetail(item._id)">

        <div slot="num">
          库存：<span class="stock">{{item.quantity}}</span>
        </div>
        <div slot="footer">
          <!-- click.stop事件修饰符，阻止单击事件继续传播，点按钮的时候，不点到大div -->
          <van-button round
                      size="mini"
                      color="linear-gradient(to right, rgb(68, 243, 228), rgb(52, 200, 245))"
                      @click.stop="cliakHandle(item)"
                      class="add-shop">
            <van-icon name="shopping-cart-o" />
          </van-button>
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
import { setCart } from "../utils/tools";


export default {
  name: 'list',
  data() {
    return {
      list: [],
      currentPage: 1,
      totalPage: 0,
      defaltImg: 'https://img.yzcdn.cn/vant/cat.jpeg',
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
      setCart(item._id);
      console.log(res);
    },
    nextPage() {
      this.loadData();
    },
  },
};
</script>
<style lang="scss" scoped>
.list {
  margin-bottom: 10px;
}
.van-card__num {
  color: #aaa;
  .stock {
    vertical-align: middle;
  }
}
.add-shop {
  position: absolute;
  bottom: 6px;
  right: 16px;
}
</style>
