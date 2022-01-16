<template>
  <Overlay/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PlayerI } from '@/core/interfaces/PlayerI';
import Overlay from '@/player-ui/components/Overlay/Overlay.vue';

export default defineComponent({
  components: {
    Overlay,
  },
  props: {
    player: Object as () => PlayerI,
  },
});
</script>

<style>
</style>
