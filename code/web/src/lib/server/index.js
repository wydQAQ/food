import axios from "axios";
import { Promise } from "q";

//登录完成后的所有请求必须在 请求的headers中添加token
let axiosins = axios.interceptors.request.use(
  function(config) {
    let logintoken = sessionStorage.getItem("logintoken");
    if (logintoken) {
      config.headers.Authorization = `Bearer ${logintoken}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default {
  login(data) {
    return axios.post("/api/user", data);
  },
  getorder() {
    //推出登录 取消全局注册的钩子
    return axios.get("/api/order");

    // axios.interceptors.request.eject(axiosins);
  },
  getfoodlist() {
    return axios.get("/api/findcommit");
  },
  subFood(data) {
    return axios.post("/api/commit", data);
  }
  //   getuserProgress(){
  //       return axios.get()
  //   }
};
