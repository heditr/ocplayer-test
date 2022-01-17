import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { PLAYBACK_PLAY } from '@/player-ui/store/modules/playback/actionTypes';

const play = (player:PlayerI, store:Store<RootState>) => {
  console.log('play');
  store.dispatch(PLAYBACK_PLAY);
};

export default play;
