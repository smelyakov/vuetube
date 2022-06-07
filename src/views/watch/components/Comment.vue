<template>
  <div class="comment">
    <img class="comment__avatar" :src="avatar" alt="" />
    <div class="comment_body">
      <span class="comment__author">{{ author }}</span>
      <span class="comment__date">{{ publishedAt }}</span>

      <div class="comment__text">
        {{ textDisplay }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import { format } from 'date-fns'
import { YTTopLevelComment } from '@/api/types'

interface Props {
  comment: YTTopLevelComment
}

const dateFormat = 'd MMMM yyyy, HH:mm'

const props = defineProps<Props>()

const bigAvatar = (url: string): string =>
  url.replace(/(\/.*s)28(.*\/photo.jpg)$/, '$1' + '48' + '$2')

const author = computed(() => props.comment.snippet.authorDisplayName)

const avatar = computed(() =>
  bigAvatar(props.comment.snippet.authorProfileImageUrl)
)

const textDisplay = computed(() => props.comment.snippet.textDisplay)

const publishedAt = computed(() =>
  format(new Date(props.comment.snippet.publishedAt), dateFormat)
)
</script>

<style lang="scss">
.comment {
  display: flex;

  &__author {
    font-weight: 600;
    display: inline-block;
    margin-right: 1rem;
  }

  &__date {
    font-size: 12px;
  }

  &__avatar {
    flex: 0 0 auto;
    margin-right: 16px;

    &:empty {
      display: none;
    }
  }
}
</style>
