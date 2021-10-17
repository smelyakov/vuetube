<template>
  <div class="player">
    <iframe
      class="player__iframe"
      width="100%"
      height="100%"
      :src="videoSrc"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Player',

  props: {
    videoId: {
      type: String,
      required: true
    }
  },

  computed: {
    videoSrc(): string {
      return `https://www.youtube.com/embed/${this.videoId}?autoplay=1&rel=0`
    }
  }
})
</script>

<style lang="scss">
.player {
  position: relative;
  width: 100%;
  height: calc(0.5625 * 100vw);
  max-height: calc(100vh - 185px);
  background: #eaeaea;

  &__play-button {
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 96px;
    height: 96px;
    align-items: center;
    justify-content: center;
    transform: translate3d(-50%, -50%, 0);
    border-radius: 50%;
    background: white;

    &:before {
      content: '';
      display: block;
      margin-left: 10px;
      border-color: transparent transparent transparent #ccc;
      border-width: 20px 0 20px 32px;
      border-style: solid;
    }
  }
}
</style>
