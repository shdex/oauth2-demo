<template>
  <el-container class="common-layout" style="height: 100vh">
    <el-aside width="200px" style="background-color: #08254f">
      <el-menu
        router
        active-text-color="#ffd04b"
        background-color="#08254f"
        text-color="#fff"
        class="el-menu-vertical-demo"
      >
        <el-menu-item :route="{ path: '/order/list' }" index="2">
          <el-icon><icon-menu /></el-icon>
          <span>交付工单列表</span>
        </el-menu-item>
        <el-menu-item :route="{ path: '/delivery/logs' }" index="3">
          <el-icon><document /></el-icon>
          <span>交付数据信息反馈</span>
        </el-menu-item>
        <el-menu-item :route="{ path: '/delivery/proof' }" index="4">
          <el-icon><setting /></el-icon>
          <span>交付凭证推送反馈</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <a href="javascript:;" class="logout" @click="logout">退出</a>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { Document, Menu as IconMenu, Setting } from "@element-plus/icons-vue";
export default {
  name: "RouteLayout",
  components: {
    Document,
    IconMenu,
    Setting,
  },
  methods: {
    logout() {
      window.localStorage.clear();
      this.$router.replace("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  min-height: 100vh;
  border-right: none;
}

.common-layout {
  .el-header {
    background-color: var(--el-color-white);
    color: #08254f;
    text-align: right;
    line-height: 60px;
    -webkit-box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);
  }
}

.logout {
  color: #08254f;
}
</style>
