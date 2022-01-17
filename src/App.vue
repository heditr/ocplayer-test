<template>
  <div id="container" ref="container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Player from '@/core';
import { PlayerI } from '@/core/interfaces/PlayerI';
import { Config } from '@/core/types/Config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
declare global {
  interface Window { Player: PlayerI; } // for debug
}

export default defineComponent({
  name: 'App',
  components: {
  },
  mounted() {
    const config:Config = {
      dimensions: {
        width: 640,
        height: 640,
      },
      backgroundImage: 'https://media.gettyimages.com/photos/on-the-set-of-the-tv-series-star-trek-picture-id607439084?s=2048x2048',
    };
    const player = new Player(this.$refs.container as HTMLElement, config);
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
