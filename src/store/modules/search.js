import api from '@/api'

const namespaced = true

const state = {
  results: []
}

const actions = {
  FETCH_SEARCH_RESULTS: ({ commit }, { query }) => {
    if (!query) {
      commit('SET_SEARCH_RESULTS', [])
      return
    }

    return new Promise((resolve, reject) => {
      return api.search({ query })
        .then((response) => {
          const { items } = response

          commit('SET_SEARCH_RESULTS', items)
          resolve(items)
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
  namespaced,
  state,
  actions,
  mutations
}
