<template>
  <div class="ocplayer__overlay"
       :class="{'ocplayer__overlay--hidden': !visible}"
       v-on:mouseleave="onMouseLeave"
       v-on:mousemove="onMouseMove"
  >
    <MainControls/>
    <SpinnerLayer v-if="waiting"/>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from 'vuex';
import { UI_VISIBLE } from '@/player-ui/store/modules/ui/actionTypes';
import { RootState } from '@/player-ui/store/RootState';
import SpinnerLayer from '@/player-ui/components/SpinnerLayer/SpinnerLayer.vue';
import MainControls from '@/player-ui/components/MainControls/MainControls.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Overlay',
  components: { MainControls, SpinnerLayer },
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
      waiting: (state:RootState) => {
        console.log('isWaiting', state.playback?.waiting);
        return state.playback?.waiting;
      },
    }),
  },
});
</script>
