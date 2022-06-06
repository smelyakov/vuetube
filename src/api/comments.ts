import { handleJSON } from '@/utils/fetch-utils'
import { API_KEY, API_URL } from './config'

export const getComments = (videoId: string) => {
  const endpoint = `${API_URL}/commentThreads?videoId=${videoId}&key=${API_KEY}&part=snippet`
  const options = {
    method: 'GET'
  }

  return fetch(endpoint, options).then(handleJSON)
}
