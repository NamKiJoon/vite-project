import axios from "axios";
import { getCookie } from "./cookie";

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: process.env.REACT_APP_NUBOT_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    config.headers["access-token"] = getCookie("access_token");
    return config;
  },
  function (error) {
    alert("request error");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    const { data } = response;
    if (response.status < 300) {
      return data;
    }
  },

  function (error) {
    // 오류시 처리 방법
    if (error.response) {
      const { status, config, data } = error.response;
      if (status === 400) {
        alert("400 err");
      } else if (status === 401) {
        alert("401 err");
      } else if (status === 403) {
        alert("403 err");
        window.location.href = "/login";
      } else if (status === 406) {
        alert("406 err");
      } else if (status === 412) {
        alert("412 err");
      } else if (status === 419 && data.reason === "overlap") {
        alert("419 err & overlap");
        window.location.href = "/main";
      } else if (status === 419 && data.reason === "expired") {
        window.location.href = "/login";
      } else if (status === 500) {
        alert("500 err");
      } else {
        console.error(data);
      }
    }
    return Promise.reject(error);
  }
);

const api = {
  get: ({ url, query }) => {
    const params = query;

    return instance({ url, params, method: "get" });
  },
  post: ({ url, query }) => {
    const params = query;

    return instance.post(url, params);
  },
  put: ({ url, query }) => {
    const params = query;

    return instance.put(url, params);
  },
  delete: ({ url, query }) => {
    const params = query;

    return instance.delete(url, params);
  },
};

export default api;
