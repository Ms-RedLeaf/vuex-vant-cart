export default {
  namespaced: true,
  state: {
    count: 1,
  },
  mutations: {
    plus(state) {
      state.count += 1;
    },
    reduce(state) {
      state.count -= 1;
    },
  },
  actions: {
    asyncPlus({ commit }) {
      setTimeout(() => {
        commit('plus');
      }, 1000);
    },
  },
};
