import { defineStore } from 'pinia';

export const serviceStore = defineStore('service', {
  state: () => ({
    userId: '',
    userName: '',
    userReviewCount: 20,
  }),
  getters: {
    getUserScore: (state) => state.userReviewCount * 100,
  },
  actions: {
    increaseUserReviewCount() {
      this.userReviewCount++;
    },
  },
});
