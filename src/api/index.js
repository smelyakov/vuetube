import { handleJSON } from '@/utils/fetch-utils'

const API_URL = 'https://content.googleapis.com/youtube/v3'
const API_KEY = 'AIzaSyCDowhhIv5S6iUeQEGBkBxbJoQtUv6hxZA'

export default {
  endpoints: {
    comments: videoId => `${API_URL}/commentThreads?videoId=${videoId}&key=${API_KEY}&part=snippet`,
    video: id => `${API_URL}/videos?id=${id}&key=${API_KEY}&part=snippet,statistics`,
    search: query => `${API_URL}/search?q=${query}&key=${API_KEY}&part=snippet&type=video&safeSearch=strict`
  },

  getComments (videoId) {
    const endpoint = this.endpoints.comments(videoId)
    const options = {
      method: 'GET'
    }

    return fetch(endpoint, options)
      .then(handleJSON)
  },

  getVideoById (id) {
    const endpoint = this.endpoints.video(id)
    const options = {
      method: 'GET'
    }

    return fetch(endpoint, options)
      .then(handleJSON)
  },

  search ({ query }) {
    const endpoint = this.endpoints.search(query)
    const options = {
      method: 'GET'
    }

    return fetch(endpoint, options)
      .then(handleJSON)
  }
}
