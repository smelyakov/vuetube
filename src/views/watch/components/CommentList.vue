<template>
  <div class="comments">
    <div v-for="comment in comments" :key="comment.id" class="comments__item">
      <Comment :comment="comment" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Comment from './Comment.vue'

export default defineComponent({
  name: 'Comments',

  components: {
    Comment
  },

  props: {
    comments: {
      type: Array,
      default: () => []
    }
  }
})
</script>

<style lang="scss">
.comments {
  &__item {
    margin-bottom: 1.5rem;
  }
}
</style>
