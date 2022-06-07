<template>
  <div class="home">
    <div class="home-search">
      <SearchBox placeholder="Search on Youtube" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
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
