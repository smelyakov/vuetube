<template>
  <div class="comments">
    <div
      class="comments__item"
      v-for="comment in comments"
      :key="comment.id"
    >
      <Comment v-bind="{ comment: comment.snippet.topLevelComment }" />
    </div>
  </div>
</template>

<script>
import Comment from './Comment'

export default {
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
}
</script>

<style lang="scss">
.comments {
  &__item {
    margin-bottom: 1.5rem;
  }
}
</style>
