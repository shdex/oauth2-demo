import axios from "axios";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

service.interceptors.request.use((config) => {
  if (localStorage.getItem("token")) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem("token")}`;
  }
  return config;
});

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code === 200) {
      return res.data;
    } else {
      return res;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
