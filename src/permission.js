import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  if (to.path === "/oauth") {
    next();
  } else {
    if (store.state.token) {
      next();
    } else {
      next({ path: "/oauth" });
    }
  }
});
