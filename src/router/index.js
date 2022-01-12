import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import OAuth from "../pages/OAuth.vue";
import WorkOrderList from "../pages/WorkOrderList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/order/list",
      component: App,
      meta: {
        auth: true,
      },
      children: [
        {
          path: "/order/list",
          name: "orderList",
          component: WorkOrderList,
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
