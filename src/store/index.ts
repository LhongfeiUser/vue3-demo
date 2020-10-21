import { createStore } from "vuex";
interface Istate {
  // readonly num: 1;
  count: number;
  list?: [];
  [key: string]: any;
}
export default createStore({
  state: {
    count: 0,
    token: localStorage.getItem("token"),
    modulState: 0,
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.token = "token";
      localStorage.setItem("token", "token");
    },
    GET_OUT(state, data) {
      state.token = "";
      localStorage.removeItem("token");
    },
    CHANGE_MODUL_STATE(state, data) {
      state.modulState = data;
    },
    ADD(state, data) {
      state.count += data;
    },
    SUBTRAB(state, data) {
      state.count -= data;
    },
  },
  actions: {
    handleLogin({ commit }, parmater) {
      if (parmater.password === "12345" && parmater.username === "lhf") {
        commit("SET_TOKEN");
      } else {
        alert("密码错误");
      }
    },
    handleAdd({ commit }, parmater: number) {
      commit("ADD", parmater);
    },
    handleSubtrab({ commit }, parmater: number) {
      commit("SUBTRAB", parmater);
    },
    handleChangeModulState({ commit }, parmater: number) {
      commit("CHANGE_MODUL_STATE", parmater);
    },
  },
  modules: {},
});
