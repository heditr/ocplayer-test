import { createStore } from 'vuex';
import { UiModule } from '@/player-ui/store/modules/ui';
import { RootState } from '@/player-ui/store/RootState';
import { PlaybackModule } from '@/player-ui/store/modules/playback';

const state:RootState = {
  debug: false,
};

const modules = {
  ui: UiModule,
  playback: PlaybackModule,
};

export const storeFactory = () => createStore({
  state,
  modules,
});
