export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    const token = this.app.$cookies.get("token");
    if (token) {
      await dispatch("user/fetchUser", token);
    }
  }
};
