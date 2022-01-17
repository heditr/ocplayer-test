<template>
  <img class="ocplayer__button-img" :src="url" :width=width :height=height />
</template>

<script lang="ts">
import '@/player-ui/components/commons/Svg/svg.scss';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Svg',
  props: {
    src: String,
    width: String,
    height: String,
  },
  computed: {
    url: {
      get():string {
        const images = require.context('../../../images/', false, /\.svg$/);
        return images(`./${this.src}`);
      },
      set(url:string):void {
        this.url = url;
      },
    },
  },
});
</script>

<style scoped>

</style>
