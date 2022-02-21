const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/auth-demo": {
        target: "http://10.8.16.252:8083/", // 后端代理接口地址
        changeOrigin: true,
      },
    },
  },
});
