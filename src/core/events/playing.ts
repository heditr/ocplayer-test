import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { PLAYBACK_PLAYING } from '@/player-ui/store/modules/playback/actionTypes';

const play = (player:PlayerI, store:Store<RootState>) => {
  console.log('playing');
  store.dispatch(PLAYBACK_PLAYING);
};

export default play;
