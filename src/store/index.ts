import { createStore } from 'vuex'

import search from './modules/search'
import watch from './modules/watch'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    search,
    watch
  }
})

export default store
