<template>
  <div>
    <el-descriptions :column="3" border class="work-detail">
      <el-descriptions-item label="工单编号">
        {{ taskInfo.taskId }}
      </el-descriptions-item>
      <el-descriptions-item label="status">
        <tag-status :status="taskInfo.status"></tag-status>
      </el-descriptions-item>
      <el-descriptions-item label="seller">
        <span>{{ taskInfo.seller }}</span>
      </el-descriptions-item>
      <el-descriptions-item label="beginTime:">
        <span>{{ taskInfo.beginTime }}</span>
      </el-descriptions-item>
      <el-descriptions-item label="buyer">
        <span>{{ taskInfo.buyer }}</span>
      </el-descriptions-item>
      <el-descriptions-item label="role">
        <span>{{ taskInfo.role }}</span>
      </el-descriptions-item>
      <el-descriptions-item label="limitDataNumber">
        <span>{{ taskInfo.limitDataNumber }}</span>
      </el-descriptions-item>
      <el-descriptions-item label="dataScheme">
        <table border="1">
          <tr v-for="(item, i) in taskInfo.dataScheme" :key="i">
            <td>{{ item.itemName }}</td>
            <td>{{ item.itemType }}</td>
          </tr>
        </table>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import { getOrderDetailById } from "@/api/index";
import { getLabel } from "@/utils/contanst.js";
import TagStatus from "./components/TagStatus.vue";
export default {
  name: "WorkOrderDetail",
  data() {
    return {
      taskInfo: {},
    };
  },
  components: {
    TagStatus,
  },
  methods: {
    getLabel,
  },
  async created() {
    try {
      this.taskInfo = await getOrderDetailById(this.$route.params.id);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style></style>
