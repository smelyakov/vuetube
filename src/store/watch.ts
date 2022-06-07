import { defineStore } from 'pinia'

import { getComments, getVideoById } from '@/api'
import {
  YTTopLevelComment,
  YTVideo,
  YTVideoInfo,
  YTVideoStatistics
} from '@/api/types'

export const useWatchStore = defineStore('watch', {
  state: (): {
    comments: YTTopLevelComment[]
    video: YTVideo | null
  } => ({
    comments: [],
    video: null
  }),

  actions: {
    async fetchComments({ videoId }: { videoId: string }) {
      if (!videoId) {
        throw new Error('FETCH_COMMENTS: videoId is not provided')
      }

      const { items } = await getComments(videoId)

      this.comments = items.map((comment) => comment.snippet.topLevelComment)
    },

    async fetchVideo({ videoId }: { videoId: string }) {
      if (!videoId) {
        throw new Error('FETCH_VIDEO: videoId is not provided')
      }

      const { items } = await getVideoById(videoId)

      this.video = items[0]
    }
  },

  getters: {
    info: (state): YTVideoInfo | undefined => state.video?.snippet,
    statistics: (state): YTVideoStatistics | undefined =>
      state.video?.statistics
  }
})
