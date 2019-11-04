<template>
  <div class="user">
    <div class="register">
      <div class="msg">
        <van-cell-group>
          <van-field v-model="username"
                     placeholder="请输入用户名"
                     label="用户名"
                     required />
          <van-field v-model="userpassword"
                     type="password"
                     label="密码"
                     placeholder="请输入密码"
                     required />
          <van-button type="primary"
                      size="large"
                      color="#3336"
                      @click="loginHandle">登录</van-button>
        </van-cell-group>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from "../service/auth";
import { setToken } from "../utils/tools";
export default {
  name: 'user',
  data() {
    return {
      // 手机号格式不对的提示信息
      errmsg: "",
      // 用户输入的密码
      userpassword: "",
      username: '',
    };
  },
  methods: {

    async loginHandle() {
      const res = await login({
        userName: this.username,
        password: this.userpassword,
      })
      setToken(res.data.token)
      console.log(res)
      if (res.data.code == "success") {
        this.$router.push({
          name: "list"
        })
      }
    }
  },
  computed: {

  },

};
</script>
<style lang="scss" scoped>
.user {
  position: absolute;
}
.nav {
  position: relative;
  .nav-left {
    position: absolute;
    left: 0.1rem;
    top: 0.28rem;
    margin-left: 0.14rem;
    color: #fff;
    width: 0.09rem;
    height: 0.16rem;
  }
  img {
    width: 100%;
  }
  span {
    color: #fff;
    position: absolute;
    top: 0.26rem;
    left: 1.6rem;
    font-size: 0.18rem;
  }
}
</style>
