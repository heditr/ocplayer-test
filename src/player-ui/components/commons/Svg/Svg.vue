<template>
  <img class="ocplayer__button-img" :class="hide" :src="url" :width=width :height=height />
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
    hidden: Boolean,
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
    hide: {
      get():string {
        return this.hidden ? 'ocplayer__button-img--hidden' : '';
      },
      set(hide:string):void {
        this.hide = hide;
      },
    },
  },
});
</script>

<style scoped>

</style>
