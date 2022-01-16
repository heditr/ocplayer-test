<template>
  <div class="ocplayer__overlay">
    <Spinner />
  </div>
</template>

<script lang="ts">
import Spinner from '@/player-ui/components/Spinner/Spinner.vue';

export default {
  name: 'SpinnerLayer',
  components: {
    Spinner,
  },
};
</script>
