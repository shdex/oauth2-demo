<template>
  <div class="oauth-btn" @click="onAuthBClick">
    <img src="../assets/logo.png" style="width: 36px" alt="" srcset="" />
    <a href="/auth-demo/requestCode" class="oauth-btn__text">上海数据交易所授权登录</a>
  </div>
</template>

<script>
export default {
  name: "OAuth",
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
    color: #fff;
  }
}
</style>
