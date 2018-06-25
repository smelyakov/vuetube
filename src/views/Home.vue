<template>
  <div class="home">
    <div class="home-search">
      <SearchBox @input="getResults" />
      <div class="home-search__autocomplete" v-if="hasResults"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'home',

  components: {
    SearchBox
  },

  computed: {
    ...mapState(['results']),

    hasResults() {
      return false;
      // return this.results.length > 0
    }
  },

  methods: {
    getResults(query) {
      this.$store.dispatch('FETCH_SEARCH_RESULTS', { query })
    }
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
}
</style>
