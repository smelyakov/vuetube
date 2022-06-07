<template>
  <div class="search-box">
    <input
      class="search-box__input"
      type="search"
      :placeholder="placeholder"
      @input="getResults"
      @blur="$emit('blur')"
    />
    <div v-if="hasResults" class="search-box__autocomplete">
      <router-link
        v-for="(item, index) in results"
        :key="index"
        class="search-box__autocomplete-item"
        :to="{ name: 'watch', params: { videoId: item.id.videoId } }"
        replace
      >
        <img
          class="search-box__autocomplete-thumb"
          :src="item.snippet.thumbnails.high.url"
          alt=""
        />
        {{ item.snippet.title }}
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia'
import { computed, defineComponent } from 'vue'

import { useSearchStore } from '@/store'

export default defineComponent({
  name: 'SearchBox',

  props: {
    placeholder: {
      type: String,
      default: 'Type to find...'
    }
  },

  emits: ['blur'],

  setup() {
    const searchStore = useSearchStore()
    const { fetchSearchResults } = searchStore
    const { results } = storeToRefs(searchStore)
    const hasResults = computed(() => results.value.length > 0)

    const getResults = (event: Event) => {
      const query: string = (event.currentTarget as HTMLInputElement).value

      fetchSearchResults(query)
    }

    return {
      results,
      hasResults,
      getResults,
      searchStore
    }
  },

  watch: {
    $route: {
      handler() {
        this.searchStore.$reset()
      },
      deep: true
    }
  },

  unmounted() {
    this.searchStore.$reset()
  }
})
</script>

<style lang="scss">
.search-box {
  display: inline-flex;
  position: relative;
  width: 100%;

  &__input {
    font-size: 100%;
    flex: auto;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 0;
    outline: none;

    &:focus {
      border-color: cornflowerblue;
    }
  }

  &__submit {
    font-size: 100%;
    flex: 0 0 auto;
    padding: 0 1rem;
    border-radius: 0;
    border: 1px solid #ccc;
    border-left: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    &:active {
      background: rgba(0, 0, 0, 0.15);
    }
  }

  &__autocomplete {
    position: absolute;
    z-index: 100;
    left: 0;
    right: 0;
    top: 100%;
    border: 1px solid #ccc;
    box-shadow: 0 20px 15px -15px rgba(0, 0, 0, 0.15);
    background: white;
  }

  &__autocomplete-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    padding: 0.5rem;
    text-decoration: none;
    color: inherit;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
  }

  &__autocomplete-thumb {
    width: 64px;
    height: auto;
    margin-right: 16px;
  }
}
</style>
