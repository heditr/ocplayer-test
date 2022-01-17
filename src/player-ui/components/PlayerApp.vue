<template>
  <Overlay/>
</template>

<script lang="ts">
import { defineComponent, provide, InjectionKey } from 'vue';
import { PlayerI } from '@/core/interfaces/PlayerI';
import Overlay from '@/player-ui/components/Overlay/Overlay.vue';
import { PlayerKey } from '@/player-ui/PlayerKey';

export default defineComponent({
  components: {
    Overlay,
  },
  props: {
    player: Object as () => PlayerI,
  },
  setup(props) {
    provide(PlayerKey, props.player);
  },
  mounted() {
    const videoEl = this.player?.videoElement;
    const bgImg = this.player?.config.backgroundImage;
    if (videoEl && bgImg) {
      videoEl.poster = bgImg;
    }
  },
});
</script>
