import { ActionTree } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import {
  PLAYBACK_BUFFERING,
  PLAYBACK_LOADED, PLAYBACK_PAUSE, PLAYBACK_PLAY, PLAYBACK_PLAYING,
  PLAYBACK_WAITING,
} from '@/player-ui/store/modules/playback/actionTypes';
import { PlaybackState } from '@/player-ui/store/modules/playback/PlaybackState';

export const actions:ActionTree<PlaybackState, RootState> = {
  [PLAYBACK_BUFFERING]: ({ commit }, buffering:boolean) => {
    commit(PLAYBACK_BUFFERING, buffering);
  },
  [PLAYBACK_WAITING]: ({ commit }, waiting:boolean) => {
    commit(PLAYBACK_WAITING, waiting);
  },
  [PLAYBACK_LOADED]: ({ commit }, loaded:boolean) => {
    commit(PLAYBACK_LOADED, loaded);
  },
  [PLAYBACK_PLAY]: ({ commit }) => {
    commit(PLAYBACK_PLAY);
  },
  [PLAYBACK_PAUSE]: ({ commit }) => {
    commit(PLAYBACK_PAUSE);
  },
  [PLAYBACK_PLAYING]: ({ commit }) => {
    commit(PLAYBACK_PLAYING);
  },
};
