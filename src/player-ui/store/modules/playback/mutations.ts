import { MutationTree } from 'vuex';
import {
  PLAYBACK_BUFFERING,
  PLAYBACK_LOADED, PLAYBACK_PAUSE, PLAYBACK_PLAY,
  PLAYBACK_WAITING,
} from '@/player-ui/store/modules/playback/actionTypes';
import { PlaybackState } from '@/player-ui/store/modules/playback/PlaybackState';

export const mutations:MutationTree<PlaybackState> = {
  [PLAYBACK_BUFFERING]: (state, buffering:boolean) => {
    state.buffering = buffering;
  },
  [PLAYBACK_WAITING]: (state, waiting:boolean) => {
    state.waiting = waiting;
  },
  [PLAYBACK_LOADED]: (state, loaded:boolean) => {
    state.loaded = loaded;
    state.waiting = false;
  },
  [PLAYBACK_PLAY]: (state) => {
    state.play = true;
    state.pause = false;
  },
  [PLAYBACK_PAUSE]: (state) => {
    state.pause = true;
    state.play = false;
    state.playing = false;
  },
};
