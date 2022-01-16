import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { PLAYBACK_WAITING } from '@/player-ui/store/modules/playback/actionTypes';

const waiting = (player:PlayerI, store:Store<RootState>, event:any) => {
  console.log('waiting', { event });
  store.dispatch(PLAYBACK_WAITING, true);
};

export default waiting;
