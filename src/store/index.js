import Vue from 'vue';
import Vuex from 'vuex';
import count from './count';

Vue.use(Vuex);

export default new Vuex.Store({
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
  modules: {
    count,
  },
});
