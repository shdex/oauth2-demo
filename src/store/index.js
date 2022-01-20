import { createStore } from "vuex";
import { code2jwtToken } from "@/api/index";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      token: "",
    };
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
  },
  actions: {
    async code2jwtToken({ commit }, code) {
      return code2jwtToken({
        code: code,
        redirect_uri: encodeURIComponent(process.env.VUE_APP_REDIRECT_URL),
      }).then((token) => {
        commit("SET_TOKEN", token);
      });
    },
  },
  devtools: process.env.NODE_ENV === "development",
});

export default store;
