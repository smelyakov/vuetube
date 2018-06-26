<template>
  <div class="search-box">
    <input
      class="search-box__input"
      type="search"
      :placeholder="placeholder"
      @input="onQueryChange"
      @blur="$emit('blur')"
    />
    <button
      class="search-box__submit"
    >Найти</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',

  props: {
    placeholder: {
      type: String,
      default: 'Type to find...'
    }
  },

  methods: {
    onQueryChange (event) {
      this.$emit('input', event.currentTarget.value)
    }
  }
}
</script>

<style lang="scss">
.search-box {
  display: inline-flex;
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
      background: rgba(0,0,0,.1);
    }

    &:active {
      background: rgba(0,0,0,.15);
    }
  }
}
</style>
