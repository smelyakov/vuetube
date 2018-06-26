<template>
  <div class="watch">
    <header class="watch__header">
      <SearchBox />
    </header>
    <div class="watch__player">
      <Player />
    </div>
    <div class="watch__content">
      <section class="watch__info">
        <h1 class="watch__title">Video Title</h1>
        <h1 class="watch__views">100 просмотров</h1>
      </section>
      <section class="watch__comments"></section>
      <aside class="watch__related"></aside>
    </div>
  </div>
</template>

<script>
import SearchBox from '@/components/SearchBox'
import Player from './components/Player'

export default {
  name: 'Watch',

  components: {
    Player,
    SearchBox
  }
}
</script>

<style lang="scss">
.watch {
  &__header {
    padding: .5rem 4%;
  }

  &__content {
    padding: 1.5rem 4%;
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
