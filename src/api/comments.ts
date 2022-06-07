import { handleJSON } from '@/utils/fetch-utils'
import { API_KEY, API_URL } from './config'
import { CommentsResponse } from './types'

export const getComments = (videoId: string): Promise<CommentsResponse> => {
  const endpoint = `${API_URL}/commentThreads?videoId=${videoId}&key=${API_KEY}&part=snippet`
  const options = {
    method: 'GET'
  }

  return fetch(endpoint, options).then(handleJSON)
}
