export const state = () => ({
  user: null,
  token: null
});

export const getters = {
  GET_USER: state => state.user,
  GET_TOKEN: state => state.token
};

export const mutations = {
  SET_USER: (state, payload) => (state.user = payload),
  SET_TOKEN: (state, payload) => (state.token = payload)
};

export const actions = {
  async fetchUser({ commit }, payload) {
    try {
      const {
        data: { user, token }
      } = await this.app.$axios.post("/user/me", {
        token: payload
      });

      commit("SET_USER", user);
      commit("SET_TOKEN", token);
    } catch (e) {
      console.log(e);
    }
  }
};
