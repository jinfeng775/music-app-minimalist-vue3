import axios from "axios"; //引入axios
import { showNotify } from "vant";
import Cookies from "js-cookie";

const ACCESS_TOKEN = "ACCESS_TOKEN";
// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  // baseURL: process.env.VUE_APP_API_BASE_URL,
  // baseURL: "http://49.232.253.214:5000",
  // baseURL: "http://127.0.0.1:5000",
  baseURL: "/api",
  timeout: 30000, // 请求超时时间
});

// 异常拦截处理器 浏览器
const errorHandler = (error) => {
  if (error.response) {
    const data = error.response.data;
    // 从 localstorage 获取 token
    const token = Cookies.get(ACCESS_TOKEN);
    if (error.response.status === 403) {
      if (token) {
        store.dispatch("Logout").then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
    if (
      error.response.status === 401 &&
      !(data.result && data.result.isLogin)
    ) {
      showNotify({ type: "danger", message: data.message || "请重新登录" });
      if (token) {
        store.dispatch("Logout").then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        });
      }
    }
    if (error.response.status === 502 || error.response.status === 500) {
      showNotify({
        type: "danger",
        message: error.response.status + "服务暂时不可用，请稍后再试 ",
      });

      return;
    }
    if (data.message && data.message !== "Internal Server Error") {
      showNotify({
        type: "danger",
        message: data.message,
      });
    } else {
      if (typeof data === "object") {
        data.message = null;
        showNotify({
          type: "danger",
          message: "请重试",
        });
      }
    }
    if (error.code === "ERR_NETWORK") {
      showNotify({
        type: "danger",
        message: "网络错误-请联系管理员",
      });
    }
    return Promise.reject(data);
  } else {
    showNotify({
      type: "danger",
      message: "网络错误-请联系管理员",
    });
  }
  return Promise.reject(error);
};

request.interceptors.request.use((config) => {
  const token = Cookies.get(ACCESS_TOKEN);
  // 如果 token 存在
  // 让每个请求携带自定义 token 请根据实际情况自行修改
  if (token) {
    config.headers["Access-Token"] = token;
  }
  return config;
}, errorHandler);

// response interceptor
request.interceptors.response.use((response) => {
  if (response.data.code && response.data.code === 401) {
    store.dispatch("Logout2").then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 500);
    });
    return response.data;
  }
  if (response.data.code && response.data.code !== 200) {
    const errMsg = response.data.message;
    if (errMsg && errMsg !== "Internal Server Error") {
      showNotify({
        type: "danger",
        message: errMsg,
      });
    } else {
      if (typeof response.data === "object") {
        response.data.message = null;
      }
    }
    return Promise.reject(response.data);
  }
  return response.data;
}, errorHandler);

const installer = {
  vm: {},
  install(Vue) {
    Vue.use(VueAxios, request);
  },
};

export default request;
