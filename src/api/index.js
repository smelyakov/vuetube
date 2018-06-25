import { handleJSON } from '@/utils/fetch-utils'

const API_URL = 'https://content.googleapis.com/youtube/v3'
const API_KEY = 'AIzaSyCjbc9QcVGeGMW9MKBAmIPBdjPd-xIpbDg'

export default {
  endpoints: {
    search: query => `${API_URL}/search?q=${query}&key=${API_KEY}&part=snippet&type=video&safeSearch=strict`
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
