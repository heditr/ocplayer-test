<template>
  <button class="ocplayer__button" @click="onClick">
    <slot />
  </button>
</template>

<script>
import { defineComponent } from 'vue';
import '@/player-ui/components/commons/Button/button.scss';

export default defineComponent({
  name: 'Button',
  props: {
    svg: String,
  },
  methods: {
    onClick(event) {
      this.$emit('click', event);
    },
  },
});
</script>

<style scoped>

</style>
