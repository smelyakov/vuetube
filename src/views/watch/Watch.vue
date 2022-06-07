<template>
  <div class="watch">
    <header class="watch__header">
      <RouterLink to="/" class="watch__back">
        <svg
          aria-hidden="true"
          data-prefix="far"
          data-icon="arrow-left"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          class="svg-inline--fa fa-arrow-left fa-w-14 fa-2x"
        >
          <path
            fill="currentColor"
            d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z"
            class=""
          ></path>
        </svg>
      </RouterLink>
      <SearchBox />
    </header>
    <div class="watch__player">
      <Player :video-id="videoId" />
    </div>
    <div class="watch__content">
      <section class="watch__info">
        <h1 class="watch__title">{{ info?.title }}</h1>
        <h1 class="watch__views">{{ viewCount }}</h1>
      </section>
      <section class="watch__comments">
        <h3 class="watch__comments-title">{{ commentCount }}</h3>
        <CommentList :comments="comments" />
      </section>
      <aside class="watch__related"></aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import numeral from 'numeral'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

import SearchBox from '@/components/SearchBox.vue'
import { useWatchStore } from '@/store'
import Player from './components/Player.vue'
import CommentList from './components/CommentList.vue'

const store = useWatchStore()
const { fetchComments, fetchVideo } = store
const { comments, info, statistics } = storeToRefs(store)

const route = useRoute()

const videoId = computed(() => route.params.videoId.toString())

onBeforeRouteUpdate((to, from) => {
  if (to.params.videoId !== from.params.videoId) {
    const videoId = to.params.videoId.toString()

    fetchComments({ videoId })
    fetchVideo({ videoId })
  }
})

const formatNumber = (value: number): string => numeral(value).format('0,0')

const commentCount = computed((): string => {
  const count = statistics.value?.commentCount

  if (!count) {
    return 'No comments'
  }

  return `${formatNumber(count)} comment${count > 1 ? 's' : ''}`
})

const viewCount = computed(() => {
  const count = statistics.value?.viewCount ?? 0

  return `${formatNumber(count)} view${count > 1 ? 's' : ''}`
})

fetchVideo({ videoId: videoId.value })
fetchComments({ videoId: videoId.value })
</script>

<style lang="scss">
.watch {
  &__back {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    padding: 0 1.5rem;
    color: #2c3e50;
    cursor: pointer;

    &:hover {
      color: cornflowerblue;
    }

    svg {
      width: 24px;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 4% 0.5rem 0;
  }

  &__content {
    padding: 1.5rem 4%;
  }

  &__comments {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  &__comments-title {
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
