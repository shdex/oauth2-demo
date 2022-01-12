import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      token: "",
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  devtools: process.env.NODE_ENV === "development",
});

export default store;
