import { createRouter, createWebHistory } from "vue-router";
// import App from "../App.vue";
import OAuth from "@/pages/OAuth.vue";
import WorkOrderList from "@/pages/WorkOrderList.vue";
import WorkOrderDetail from "@/pages/WorkOrderDetail.vue";
import RouteLayout from "@/layouts/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/order/list",
      component: RouteLayout,
      meta: {
        auth: true,
      },
      children: [
        {
          path: "/order/list",
          name: "orderList",
          component: WorkOrderList,
        },
        {
          path: "/order/list/:id",
          name: "orderDetail",
          component: WorkOrderDetail,
        },
      ],
    },
    {
      path: "/oauth",
      name: "oauth",
      component: OAuth,
    },
  ],
});

export default router;
