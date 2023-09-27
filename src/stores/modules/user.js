import { defineStore } from "pinia";
import { login, getInfo, logout } from "@/api/login";
import Cookies from "js-cookie";
import { getToken, setToken, removeToken } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "users",
  state: () => {
    return {
      userInfo: {},
      token: getToken(),
    }
  },
  getters: {},
  actions: {
    // 登录
    async Login(params, checked) {
      Cookies.set("userName", params.userName, {
        expires: 7, // 有效期7天
      })
      Cookies.set("password", params.password, {
        expires: 7,
      })
      Cookies.set("rememberMe", checked === true ? "true" : "false", {
        expires: 7,
      })
      const res = await login(params)
      console.log({res})
      setToken(res.token)
      this.token = res.token
      return res
    },

    // 登出
    async Logout() {
      const res = await logout();
      removeToken();
      return res;
    },

    // 获取用户信息
    async GetInfo() {
      try {
        const res = await getInfo()
        this.userInfo = res.data.user;
        return res;
      } catch (error) {
        if (error.response.status === 401) {
          removeToken()
        }
      }
    },

  },
})
