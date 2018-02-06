import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    money: 0,
    min: 0.01,
    title: '',
    moneyArr: [],
    state: 0,
  },
  mutations: {
    initMoney (state, moneyObj) {
      state.count = moneyObj.inputCount;
      state.money = moneyObj.inputMoney;
      state.title = moneyObj.inputTitle;
    },
    setState(state, step) {
      state.state = step;
    },
    setOpenCase (state, openObj) {
      state.count = openObj.count;
      state.money = openObj.money;
    }
  },
  actions: {

  }
})

export default store;
