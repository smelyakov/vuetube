import { handleJSON } from '@/utils/fetch-utils'
import { API_KEY, API_URL } from './config'
import { YTVideoResponse } from './types'

export const getVideoById = (id: string): Promise<YTVideoResponse> => {
  const endpoint = `${API_URL}/videos?id=${id}&key=${API_KEY}&part=snippet,statistics`
  const options = {
    method: 'GET'
  }

  return fetch(endpoint, options).then(handleJSON)
}
