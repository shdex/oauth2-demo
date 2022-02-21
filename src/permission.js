import router from "./router";
import store from "./store";

router.beforeEach((to, from, next) => {
  const hasToken = window.localStorage.getItem("token");

  if (hasToken || to.path === "/oauth") {
    next();
  } else {
    if (to.query.code) {
      store.dispatch("code2jwtToken", to.query.code).then(() => {
        next("/");
      });
    } else {
      next({ path: "/oauth" });
    }
  }
});
