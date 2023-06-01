const Cookie = process.client ? require("js-cookie") : undefined;

import { defineStore } from "pinia";

export const useAuth = defineStore("auth", {
  state: () => ({
    auth: Cookie ? JSON.parse(Cookie.get("auth")) : null,
  }),
  getters: {
    getAuth(state) {
      return state.auth;
    },
  },
  actions: {
    setAuth(auth: any) {
      this.auth = auth;
    },
  },
});
