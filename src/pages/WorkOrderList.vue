<template>
  <div>order</div>
</template>

<script>
import { getOrderList } from "@/api/index";
export default {
  name: "OrderList",
  async mounted() {
    const res = await getOrderList();
    console.log(res);
  },
};
</script>

<style></style>
