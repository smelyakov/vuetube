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
      <RouterLink
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
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import {
  computed,
  defineEmits,
  defineProps,
  onUnmounted,
  withDefaults
} from 'vue'
import { RouterLink } from 'vue-router'

import { useSearchStore } from '@/store'
import { onBeforeRouteUpdate } from 'vue-router'

interface Props {
  placeholder?: string
}

interface Emits {
  (e: 'blur'): void
}

const searchStore = useSearchStore()
const { fetchSearchResults } = searchStore
const { results } = storeToRefs(searchStore)
const hasResults = computed(() => results.value.length > 0)

const getResults = (event: Event) => {
  const query: string = (event.currentTarget as HTMLInputElement).value

  fetchSearchResults(query)
}

withDefaults(defineProps<Props>(), {
  placeholder: 'Type to find...'
})

defineEmits<Emits>()

onBeforeRouteUpdate((to, from) => {
  if (to.params.videoId !== from.params.videoId) {
    searchStore.$reset()
  }
})

onUnmounted(() => searchStore.$reset())
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
