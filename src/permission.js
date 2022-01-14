import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  const hasToken = window.localStorage.getItem("token");
  if (to.path === "/oauth") {
    if (to.query.code) {
      store.dispatch("code2jwtToken", to.query.code).then(() => {
        next("/");
      });
    } else {
      next();
    }
  } else {
    if (hasToken) {
      next();
    } else {
      next({ path: "/oauth" });
    }
  }
});
