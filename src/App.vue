<template>
  <div id="container" ref="container">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Player from '@/core';

export default defineComponent({
  name: 'App',
  components: {
  },
  mounted() {
    const player = new Player(this.$refs.container as HTMLElement);
    player.load('https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd')
      .then(() => player.play());
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
