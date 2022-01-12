<template>
  <div class="oauth-btn" @click="onAuthBClick">
    <img src="../assets/logo.png" style="width: 36px" alt="" srcset="" />
    <div class="oauth-btn__text">上海数据交易所授权登录</div>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "OAuth",
  mounted() {
    console.log(this.$store.state.count);
  },
  methods: {
    onAuthBClick() {
      const params = {
        client_id: process.env.VUE_APP_CLIENT_ID,
        redirect_uri: window.location.href,
        response_type: "code",
        state: "ZHDIE7X",
      };
      window.location.href = process.env.VUE_APP_OAUTH_URL + qs.stringify(params);
    },
  },
};
</script>

<style lang="scss" scoped>
.oauth-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 48px;
  background-color: #2c3e50;
  color: #fff;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 2px;
  margin: 60px auto;

  .oauth-btn__text {
    flex: 1;
    text-align: center;
    font-size: 14px;
  }
}
</style>
