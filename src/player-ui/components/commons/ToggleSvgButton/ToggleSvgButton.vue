<template>
  <Button @click="onClick">
    <Svg :hidden="!toggle" height="48" width="48" :src="baseSvg" />
    <Svg :hidden="toggle" height="48" width="48" :src="toggleSvg" />
  </Button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '../Button/Button.vue';
import Svg from '../Svg/Svg.vue';

export default defineComponent({
  name: 'ToggleSvgButton',
  components: {
    Button,
    Svg,
  },
  props: {
    toggle: Boolean,
    baseSvg: String,
    toggleSvg: String,
  },
  methods: {
    onClick(event:Event) {
      this.$emit('click', event);
    },
  },
});
</script>

<style scoped>

</style>
