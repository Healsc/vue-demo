import { defineStore } from 'pinia';

export const UserStore = defineStore({
  id: 'user',

  state: () => ({
    count: 1,
  }),

  getters: {
    doubleCount: state => state.count * 2,
  },

  actions: {
    resetCount(){
      this.count = 10;
    }
  },

})