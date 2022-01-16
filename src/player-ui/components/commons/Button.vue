<template>
  <div class="ocplayer__button">
    <button v-on:click="onClick"></button>
  </div>

</template>

<script>
export default {
  name: 'Button',
  props: {
    onClick: Function,
  },
};
</script>

<style scoped>

</style>
