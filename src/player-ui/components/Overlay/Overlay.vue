<template>
  <div class="ocplayer__overlay"
       v-bind:class="{'ocplayer__overlay--hidden': !visible}"
       v-on:mouseleave="onMouseLeave"
       v-on:mousemove="onMouseMove"
  ></div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import { UI_VISIBLE } from '@/player-ui/store/modules/ui/actionTypes';
import { RootState } from '@/player-ui/store/RootState';

export default {
  name: 'Overlay',
  methods: {
    ...mapActions({
      setUiVisible: UI_VISIBLE,
    }),
    onMouseLeave():void {
      this.setUiVisible(false);
    },
    onMouseMove():void {
      this.setUiVisible(true);
    },
  },
  computed: {
    ...mapState<RootState>({
      visible: (state:RootState) => state.ui?.visible,
      buffering: (state:RootState) => state.playback?.buffering,
    }),
  },
};
</script>
