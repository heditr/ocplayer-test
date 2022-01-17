<template>
  <div class="ocplayer__main-controls">
    <ToggleSvgButton
      base-svg="play.svg"
      toggle-svg="pause.svg"
      :toggle=playing
      @click="playOrPause"
    ></ToggleSvgButton>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue';
import { mapState } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import ToggleSvgButton from '@/player-ui/components/commons/ToggleSvgButton/ToggleSvgButton.vue';
import '@/player-ui/components/MainControls/main-controls.scss';
import { PlayerKey } from '@/player-ui/PlayerKey';

export default defineComponent({
  name: 'MainControls',
  components: { ToggleSvgButton },
  methods: {
    playOrPause() {
      console.log({ MainControls: this });
      if (this.player.store.state.playback?.playing) {
        this.player.pause();
      } else {
        this.player.play();
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
      playing: (state:RootState) => state.playback?.playing,
    }),
  },
});
</script>
