import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import loginModule from './modules/login.js';
import homeModule from './modules/home.js';

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login:loginModule,
    home:homeModule
  }
})
