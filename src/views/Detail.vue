<template>
  <div class="list">
    <div class="swiper">
      <img :src="list.coverImg"
           alt />
      <p>{{list.name}}</p>
    </div>

    <div :class="navTu== true ? 'tu2' :'tu'">

      <div class="title"
           v-show="!isShow">
        <p>商品</p>
        <p>评价</p>
        <p>详情</p>
        <p>推荐</p>
      </div>

    </div>

    <div class="price">
      <p class="price1">￥{{list.price}}</p>
      <p class="price2">￥99</p>
      <p class="price3">6.0折</p>
    </div>

    <div class="vip">
      <p>加入会员下单立减￥5.9</p>
      <div class="kaitong">
        <span>开通</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="standard">
      <ul>
        <li>
          <span>规格</span>
          <p>选择 颜色/款式/尺码</p>
          <van-icon name="arrow"
                    color="#ccc" />
        </li>
        <li>
          <span>参数</span>
          <p>品牌/材质/...</p>
          <van-icon name="arrow"
                    color="#ccc" />
        </li>
        <li>
          <span>购物须知</span>
          <van-icon name="arrow"
                    color="#ccc" />
        </li>
      </ul>
    </div>
    <!-- 评价 -->
    <div class="evaluation">
      <div class="eTop">
        <div class="eLef">
          <span>商品评价</span>
          <span>(1360)</span>
        </div>
        <div class="eRig">
          <span>查看全部</span>
          <van-icon name="arrow"
                    color="#F1A03F"
                    size="0.15rem" />
        </div>
      </div>
      <div class="eMid">
        <div>
          <span>质量好</span>
          <span>(177)</span>
        </div>
        <div>
          <span>衣服很舒服</span>
          <span>(136)</span>
        </div>
        <div>
          <span>最新</span>
          <span>(136)</span>
        </div>
      </div>
      <div class="eBot">
        <div class="eB-t">
          <van-image round
                     width="0.32rem"
                     height="0.32rem"
                     src="https://img.yzcdn.cn/vant/cat.jpeg" />
          <span>星夜如雨</span>
        </div>
      </div>
    </div>
    <div class="brand"></div>

    <div class="footer">
      <van-goods-action>
        <van-goods-action-icon icon="chat-o"
                               text="客服" />
        <van-goods-action-icon icon="cart-o"
                               text="购物车" />
        <van-goods-action-icon icon="shop-o"
                               text="店铺" />
        <van-goods-action-button color="#CD8829"
                                 type="warning"
                                 text="加入购物车" />
        <van-goods-action-button color="#333"
                                 type="danger"
                                 text="立即购买" />
      </van-goods-action>
    </div>
  </div>
</template>
<script>
import getDetail from '../service/serve';

export default {
  name: 'detail',
  data() {
    return {
      isShow: true,
      id: this.$route.params.id,
      navTu: '',
      list: [],
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const res = await getDetail(this.id);
      console.log(res.data);
      this.list = res.data;
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  color: #333333;
  margin-top: 50px;
}
.swiper {
  position: absolute;
  width: 100%;
  img {
    display: block;
    height: 3.27rem;
    width: 100%;
  }
  p {
    margin: 0.05rem 0 0.17rem;
    font-size: 0.14rem;
    color: rgba(51, 51, 51, 1);
  }
}
.tu {
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0.14rem;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
}
.tu2 {
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  padding: 0.14rem;
  position: sticky;
  position: -webkit-sticky;
  top: 0px;
  z-index: 10;
  background: black;
}
.title {
  color: white;
  display: flex;
  justify-content: space-around;
  p {
    margin: 0 0.1rem;
  }
}

.price {
  margin-top: 3.12rem;
  margin-left: 0.13rem;
  display: flex;
  align-items: center;
  .price1 {
    font-size: 0.21rem;
    color: rgba(213, 180, 136, 1);
  }
  .price2 {
    margin-left: 0.08rem;
    font-size: 0.14rem;
    color: rgba(51, 51, 51, 1);
    text-decoration: line-through;
  }
  .price3 {
    width: 0.6rem;
    height: 0.17rem;
    margin-left: 0.13rem;
    text-align: center;
    line-height: 0.17rem;
    border: 0.01rem solid rgba(213, 180, 136, 1);
    border-radius: 0.08rem;
  }
}
</style>
