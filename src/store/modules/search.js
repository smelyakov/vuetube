import api from '@/api'

const namespaced = true

const state = {
  results: []
}

const actions = {
  FETCH_SEARCH_RESULTS: ({ commit }, { query }) => {
    return new Promise((resolve, reject) => {
      return api.search({ query })
        .then((results) => {
          commit('SET_SEARCH_RESULTS', results)
          resolve(results)
        })
        .catch(error => reject(error))
    })
  }
}

const mutations = {
  SET_SEARCH_RESULTS: (state, results) => {
    state.results = results
  }
}

export default {
  state,
  actions,
  mutations
}
