const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/auth-demo": {
        target: "http://10.8.16.148:8083/",
        changeOrigin: true,
      },
    },
  },
});
