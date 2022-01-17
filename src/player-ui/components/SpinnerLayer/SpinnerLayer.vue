<template>
  <div class="ocplayer__spinner-layer">
    <Spinner />
  </div>
</template>

<script lang="ts">
import Spinner from '@/player-ui/components/Spinner/Spinner.vue';
import '@/player-ui/components/SpinnerLayer/spinnerLayer.scss';

export default {
  name: 'SpinnerLayer',
  components: {
    Spinner,
  },
};
</script>
