export type SearchResponse = {
  items: YTSearchResult[]
}

export type CommentsResponse = {
  items: YTComment[]
}

export interface YTSearchResult {
  etag: string
  id: {
    kind: string
    videoId: string
  }
  kind: string
  snippet: {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishTime: string
    publishedAt: string
    thumbnails: {
      default: {
        height: number
        url: string
        width: number
      }
      high: {
        height: number
        url: string
        width: number
      }
      medium: {
        height: number
        url: string
        width: 320
      }
    }
    title: string
  }
}

export interface YTComment {
  etag: string
  id: string
  kind: string
  snippet: {
    canReply: boolean
    isPublic: boolean
    topLevelComment: {
      etag: string
      id: string
      kind: string
      snippet: {
        authorChannelId: { value: string }
        authorChannelUrl: string
        authorDisplayName: string
        authorProfileImageUrl: string
        canRate: boolean
        likeCount: number
        publishedAt: string
        textDisplay: string
        textOriginal: string
        updatedAt: string
        videoId: string
        viewerRating: string
      }
    }
    totalReplyCount: number
    videoId: string
  }
}

export interface YTVideoResponse {
  etag: string
  kind: string
  items: YTVideo[]
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
}

export type YTVideo = {
  etag: string
  id: string
  kind: string
  snippet: {
    categoryId: string
    channelId: string
    channelTitle: string
    defaultAudioLanguage: string
    description: string
    liveBroadcastContent: string
    localized: {
      description: string
      title: string
    }
    publishedAt: string
    tags: string[]
    thumbnails: {
      default: {
        height: number
        url: string
        width: number
      }
      high: {
        height: number
        url: string
        width: number
      }
      medium: {
        height: number
        url: string
        width: 320
      }
    }
    title: string
  }
  statistics: {
    commentCount: string
    favoriteCount: string
    likeCount: string
    viewCount: string
  }
}
