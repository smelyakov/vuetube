<template>
  <div class="home">
    <div class="home-search">
      <SearchBox />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBox from '@/components/SearchBox.vue'

export default {
  name: 'home',

  components: {
    SearchBox
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
}
</style>
