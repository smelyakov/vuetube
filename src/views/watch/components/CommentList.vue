<template>
  <div class="comments">
    <div v-for="comment in comments" :key="comment.id" class="comments__item">
      <Comment :comment="comment" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { YTTopLevelComment } from '@/api/types'
import { defineProps } from 'vue'
import Comment from './Comment.vue'

interface Props {
  comments: YTTopLevelComment[]
}

defineProps<Props>()
</script>

<style lang="scss">
.comments {
  &__item {
    margin-bottom: 1.5rem;
  }
}
</style>
