import { defineStore } from 'pinia'

import { search } from '@/api'
import { YTSearchResult } from '@/api/types'

export const useSearchStore = defineStore('search', {
  state: (): {
    results: YTSearchResult[]
  } => ({
    results: []
  }),

  actions: {
    async fetchSearchResults(query: string) {
      if (!query) {
        this.results = []
        return
      }

      const { items } = await search(query)

      this.results = items
    }
  }
})
