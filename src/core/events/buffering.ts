import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { PLAYBACK_BUFFERING } from '@/player-ui/store/modules/playback/actionTypes';

const buffering = (player:PlayerI, store:Store<RootState>, event?:Event) => {
  console.log('buffering', event);
  store.dispatch(PLAYBACK_BUFFERING, event);
};

export default buffering;
