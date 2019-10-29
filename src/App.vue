<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">列表页</router-link>|
      <router-link to="/detail">详情页</router-link>|
      <router-link to="/cart">购物车</router-link>|
      <router-link to="/user">用户</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  #nav {
    margin: 0 auto;
  }
}
</style>
