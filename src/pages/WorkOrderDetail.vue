<template>
  <div>
    <div>
      <span>status:</span>
      <tag-status :status="taskInfo.status"></tag-status>
    </div>
    <div>
      <span>seller:</span>
      <span>{{ taskInfo.seller }}</span>
    </div>
    <div>
      <span>beginTime:</span>
      <span>{{ taskInfo.beginTime }}</span>
    </div>
    <div>
      <span>buyer:</span>
      <span>{{ taskInfo.buyer }}</span>
    </div>
    <div>
      <span>role:</span>
      <span>{{ taskInfo.role }}</span>
    </div>
    <div>
      <span>limitDataNumber:</span>
      <span>{{ taskInfo.limitDataNumber }}</span>
    </div>
    <div>
      <span>dataScheme:</span>
      <table border="1">
        <tr v-for="(item, i) in taskInfo.dataScheme" :key="i">
          <td>{{ item.itemName }}</td>
          <td>{{ item.itemType }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { getOrderDetailById } from "@/api/index";
import contanst from "@/utils/contanst.js";
import TagStatus from "./components/TagStatus.vue";
export default {
  name: "WorkOrderDetail",
  data() {
    return {
      taskInfo: {},
      contanst,
    };
  },
  components: {
    TagStatus,
  },
  methods: {
    getLabel(v) {
      if (!v) return;
      return contanst.delivery_status.find((item) => item.value == v).label;
    },
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
