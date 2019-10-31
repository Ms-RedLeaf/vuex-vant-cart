<template>
  <div id="app">
    <div id="nav">
      <van-tabs sticky
                router>
        <van-tab title="列表页"
                 :to="{name:'list'}">
                 
                 </van-tab>
        <van-tab title="购物车"
                 :to="{name:'cart'}"></van-tab>
        <van-tab title="用户"
                 :to="{name:'user'}"></van-tab>
      </van-tabs>
    </div>

    <router-view />

  </div>
</template>
<script>

export default {
  data() {
    return {

    };
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
</style>
