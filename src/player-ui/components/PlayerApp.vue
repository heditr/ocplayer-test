<template>
  <div ref="videoContainer" class="">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PlayerI } from '@/core/interfaces/PlayerI';
import shaka from '@/core/shaka';

export default defineComponent({
  props: {
    player: Object as () => PlayerI,
  },
  mounted() {
    const ui = new shaka.ui.Overlay(
      this.player?.mediaPlayer,
      this.player?.container,
      this.player?.videoElement,
    );
    const controls = ui.getControls();
    console.log({ controls, player: controls.getPlayer() });
    const uiConfig = this.player?.videoElement.ui;
    const config = {
      controlPanelElements: ['play_pause', 'fullscreen', 'volume'],
    };
    if (uiConfig) uiConfig.configure(config);
  },
});
</script>

<style>
</style>
