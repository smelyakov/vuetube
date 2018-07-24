import api from '@/api'

const namespaced = true

const state = {
  comments: null,
  video: null
}

const getters = {
  comments: state => {
    if (!state.comments) {
      return []
    }

    return state.comments.map(comment => comment.snippet.topLevelComment)
  },
  info: state => state.video ? state.video.snippet : {},
  statistics: state => state.video ? state.video.statistics : {}
}

const actions = {
  FETCH_COMMENTS: ({ commit }, { videoId }) => {
    return new Promise((resolve, reject) => {
      if (!videoId) {
        reject(new Error('FETCH_COMMENTS: videoId is not provided'))
      }

      return api.getComments(videoId)
        .then((response) => {
          const comments = response.items

          commit('SET_COMMENTS', comments)
          resolve(comments)
        })
        .catch(error => reject(error))
    })
  },

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
  SET_COMMENTS: (state, comments) => {
    state.comments = comments
  },

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
