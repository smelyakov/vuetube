import api from '@/api'

const namespaced = true

const state = {
  video: null
}

const getters = {
  info: state => state.video ? state.video.snippet : {},
  statistics: state => state.video ? state.video.statistics : {}
}

const actions = {
  FETCH_VIDEO: ({ commit }, { videoId }) => {
    return new Promise((resolve, reject) => {
      if (!videoId) {
        reject(new Error('FETCH_VIDEO: videoId is not provided'))
      }

      return api.getVideoById(videoId)
        .then((response) => {
          const video = response.items[0]
          commit('SET_VIDEO', video)
          resolve(video)
        })
        .catch(error => reject(error))
    })
  }
}

const mutations = {
  SET_VIDEO: (state, video) => {
    state.video = video
  }
}

export default {
  namespaced,
  state,
  actions,
  getters,
  mutations
}
