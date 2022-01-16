<template>
  <div id="container" ref="container">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Player from '@/core';
import { PlayerI } from '@/core/interfaces/PlayerI';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare global {
  interface Window { Player: PlayerI; }
}

export default defineComponent({
  name: 'App',
  components: {
  },
  mounted() {
    const player = new Player(this.$refs.container as HTMLElement);
    window.Player = player;
    player.load('https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd')
      .then(() => console.log('loaded'));
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
