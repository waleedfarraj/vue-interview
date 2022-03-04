import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios").default;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
      { description: "test descriptions", name: "test title" },
    ],
  },
  mutations: {
    setList(state, payload) {
      state.list.unshift(payload);
    },
  },
  getters: {
    list: (state) => state.list,
  },
  actions: {
    fetchList({ commit }, formData) {
      const apiKey = `bbe220c0cdf3879ab4296132d5764264`;
      const sessionId = `dde06139373c7b9299d9871ed07a8f4ebc528208`;

      axios
        .post(
          `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
          formData
        )
        .then((response) => {
          commit("setList", formData);
        });
    },
  },
});
