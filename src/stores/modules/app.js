import { defineStore } from "pinia"

export const useAppStore = defineStore({
  id: "app",
  state: () => {
    return {
      loading: false,
    }
  },
  getters: {},
  actions: {},
})
