import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    plus(state) {
      state.count++;
    },
    reduce(state) {
      state.count--;
    },
  },
  actions: {
    asyncPlus({ commit }) {
      setTimeout(() => {
        commit('plus');
      }, 1000);
    },
  },
  modules: {},
});
