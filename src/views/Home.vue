<template>
  <div class="home">
    <div class="home-search">
      <SearchBox placeholder="Search on Youtube" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SearchBox from '@/components/SearchBox.vue'

export default defineComponent({
  name: 'Home',

  components: {
    SearchBox
  }
})
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
