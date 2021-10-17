<template>
  <div class="comment">
    <div class="comment__avatar">
      <img :src="avatar" alt="" />
    </div>
    <div class="comment_body">
      <span class="comment__author">{{ author }}</span>
      <span class="comment__date">{{ publishedAt }}</span>

      <div class="comment__text">
        {{ textDisplay }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { format } from 'date-fns'

const dateFormat = 'd MMMM yyyy, HH:mm'

export default defineComponent({
  name: 'Comment',

  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  computed: {
    author(): string {
      return this.comment.snippet.authorDisplayName
    },

    avatar(): string {
      return this.bigAvatar(this.comment.snippet.authorProfileImageUrl)
    },

    publishedAt(): string {
      const { publishedAt } = this.comment.snippet

      return format(new Date(publishedAt), dateFormat)
    },

    textDisplay(): string {
      return this.comment.snippet.textDisplay
    }
  },

  methods: {
    bigAvatar(url: string): string {
      return url.replace(/(\/.*s)28(.*\/photo.jpg)$/, '$1' + '48' + '$2')
    }
  }
})
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
  }
}
</style>
