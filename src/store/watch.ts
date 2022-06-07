import { defineStore } from 'pinia'

import { getComments, getVideoById } from '@/api'
import { YTComment, YTVideo } from '@/api/types'

export const useWatchStore = defineStore('watch', {
  state: (): {
    comments: YTComment['snippet']['topLevelComment'][]
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
    info: (state) => (state.video ? state.video.snippet : {}),
    statistics: (state) => (state.video ? state.video.statistics : {})
  }
})
