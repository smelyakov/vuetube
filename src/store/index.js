import Vue from 'vue'
import Vuex from 'vuex'

import search from './modules/search'
import watch from './modules/watch'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {

  },
  actions: {

  },
  modules: {
    search,
    watch
  }
})
