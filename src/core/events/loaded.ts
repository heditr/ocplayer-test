import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { PLAYBACK_LOADED } from '@/player-ui/store/modules/playback/actionTypes';

const loaded = (player:PlayerI, store:Store<RootState>, event:any) => {
  console.log('loaded');
  store.dispatch(PLAYBACK_LOADED, true);
};

export default loaded;
