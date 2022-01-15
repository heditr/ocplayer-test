<template>
  <div ref="videoContainer" class="shadow-lg mx-auto max-w-full size">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PlayerI } from '@/core/interfaces/PlayerI';

export default defineComponent({
  props: {
    player: Object as () => PlayerI,
  },
  mounted() {
    console.log('from comp', this.player);
  },
  methods: {
    onError(error:any) {
      console.error('Error code', error.code, 'object', error);
    },
  },
});
</script>

<style>
</style>
