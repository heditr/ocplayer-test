import { MutationTree } from 'vuex';
import { PLAYBACK_BUFFERING, PLAYBACK_WAITING } from '@/player-ui/store/modules/playback/actionTypes';
import { PlaybackState } from '@/player-ui/store/modules/playback/PlaybackState';

export const mutations:MutationTree<PlaybackState> = {
  [PLAYBACK_BUFFERING]: (state, buffering:boolean) => {
    state.buffering = buffering;
  },
  [PLAYBACK_WAITING]: (state, waiting:boolean) => {
    state.waiting = waiting;
  },
};
