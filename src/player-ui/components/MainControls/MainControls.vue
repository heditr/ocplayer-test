<template>
  <div class="ocplayer__main-controls">
    <ToggleSvgButton
      base-svg="play.svg"
      toggle-svg="pause.svg"
      :toggle=!paused
      @click="playOrPause"
    ></ToggleSvgButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { mapState } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import ToggleSvgButton from '@/player-ui/components/commons/ToggleSvgButton/ToggleSvgButton.vue';
import { PlayerKey } from '@/player-ui/PlayerKey';
import '@/player-ui/components/MainControls/main-controls.scss';

export default defineComponent({
  name: 'MainControls',
  components: { ToggleSvgButton },
  methods: {
    playOrPause() {
      if (this.player.videoElement.paused) {
        this.player.play();
      } else {
        this.player.pause();
      }
    },
  },
  setup() {
    const player = inject(PlayerKey);
    if (!player) {
      throw new Error('no player provided');
    }
    return {
      player,
    };
  },
  computed: {
    ...mapState<RootState>({
      paused: (state:RootState) => state.playback?.pause,
    }),
  },
});
</script>
