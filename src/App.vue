<template>
  <div id="app">

    <div></div>
    <div id="nav">
      <van-sticky>
        <van-tabs sticky
                  router
                  v-model="active">
          <van-tab title="列表页"
                   :to="{name:'list'}"
                   name="list">

          </van-tab>
          <van-tab title="购物车"
                   :to="{name:'cart'}"
                   name="cart"></van-tab>
          <van-tab title="用户"
                   :to="{name:'user'}"
                   name="user"></van-tab>
        </van-tabs>
      </van-sticky>
    </div>
    <transition name="component-fade">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<script>

export default {
  data() {
    return {
      active: 'list',
    };
  },
  watch: {
    $route(to, from) {
      // console.log(to, from);
      this.active = to.name;
    },
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  #nav {
    margin: 0 auto;
  }
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: all 0.3s ease;
}
.component-fade-enter {
  opacity: 0;
  transform: translateX(370px);
}
.component-fade-leave-to {
  opacity: 0;
  transform: translateX(-370px);
}
</style>
