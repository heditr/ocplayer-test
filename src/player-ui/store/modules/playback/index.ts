import { PlaybackState } from '@/player-ui/store/modules/playback/PlaybackState';
import { mutations } from '@/player-ui/store/modules/playback/mutations';
import { actions } from '@/player-ui/store/modules/playback/actions';

const state:PlaybackState = {
  buffering: false,
  waiting: false,
  loaded: false,
  play: false,
  playing: false,
  pause: false,
};

export const PlaybackModule = {
  state,
  mutations,
  actions,
};
