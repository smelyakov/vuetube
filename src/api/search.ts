import { handleJSON } from '@/utils/fetch-utils'
import { API_KEY, API_URL } from './config'
import { SearchResponse } from './types'

export const search = (query: string): Promise<SearchResponse> => {
  const endpoint = `${API_URL}/search?q=${query}&key=${API_KEY}&part=snippet&type=video&safeSearch=strict`
  const options = {
    method: 'GET'
  }

  return fetch(endpoint, options).then(handleJSON)
}
