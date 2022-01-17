<template>
  <el-scrollbar v-loading="vLoading">
    <div v-if="list.length">
      <div class="oreder-list" v-for="item in list" :key="item.taskId">
        <div class="oreder-list__ft">
          <label>工单编号：{{ item.orderNo }}</label>
          <span> <label>工单创建时间：：</label> {{ item.createTime }}</span>
          <span><label>交付开始时间：</label> {{ item.beginTime }}</span>
          <tag-status :status="item.status"></tag-status>
        </div>
        <div class="oreder-list__bd">
          <span class="order-item">{{ item.productName }}</span>
          <span class="order-text">{{ item.productType }}</span>
          <router-link class="operation" :to="{ path: `/order/list/${item.taskId}` }">查看详情</router-link>
        </div>
      </div>
    </div>
    <div v-else>暂无数据</div>
  </el-scrollbar>
</template>

<script>
import { getOrderList } from "@/api/index";
import TagStatus from "./components/TagStatus.vue";
export default {
  components: { TagStatus },
  name: "WorkOrderList",
  data() {
    return {
      list: [],
      vLoading: true,
    };
  },
  async mounted() {
    try {
      const result = await getOrderList();
      this.list = result.list;
      this.vLoading = false;
    } catch (error) {
      console.log(error);
      this.vLoading = false;
    }
  },
};
</script>

<style lang="scss">
.oreder-list {
  border-bottom: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  color: #555555;

  &__ft,
  &__bd {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__bd {
    margin-top: 10px;
  }
}

.operation {
  color: #357fed;
  width: 80px;
  height: 28px;
  border: 1px solid #357fed;
  border-radius: 2px;
  display: inline-block;
  line-height: 32px;
  margin-right: 16px;
  text-align: center;
  font-size: 14px;
}

.order-text {
  width: 66px;
  height: 32px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  line-height: 32px;
  font-size: 12px;
  text-align: center;
  padding: 0 3px;
}
</style>
