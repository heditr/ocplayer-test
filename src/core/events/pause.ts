import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { PLAYBACK_PAUSE } from '@/player-ui/store/modules/playback/actionTypes';

const play = (player:PlayerI, store:Store<RootState>) => {
  console.log('pause');
  store.dispatch(PLAYBACK_PAUSE);
};

export default play;
