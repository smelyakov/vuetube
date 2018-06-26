<template>
  <div class="home">
    <div class="home-search">
      <SearchBox @input="getResults" />
      <div
        class="home-search__autocomplete"
        v-if="hasResults"
      >
        <router-link
          class="home-search__autocomplete-item"
          :to="{name: 'watch', params: { videoId: item.id.videoId }}"
          v-for="(item, index) in results"
          :key="index"
        >
          <img
            class="home-search__autocomplete-thumb"
            :src="item.snippet.thumbnails.high.url"
            alt=""
          />
          {{ item.snippet.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'home',

  components: {
    SearchBox
  },

  destroyed() {
    this.$store.dispatch('search/RESET_SEARCH_RESULTS')
  },

  computed: {
    ...mapState('search', ['results']),

    hasResults () {
      return this.results.length > 0
    }
  },

  methods: {
    getResults (query) {
      this.$store.dispatch('search/FETCH_SEARCH_RESULTS', { query })
    },
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.home-search {
  position: relative;
  width: 100%;

  &__autocomplete {
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    border: 1px solid #ccc;
    box-shadow: 0 20px 15px -15px rgba(0,0,0,.15);
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
      background: rgba(0,0,0,0.05);
    }
  }

  &__autocomplete-thumb {
    width: 64px;
    height: auto;
    margin-right: 16px;
  }
}
</style>
