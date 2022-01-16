import { Store } from 'vuex';
import { PlayerI } from '@/core/interfaces/PlayerI';
import { RootState } from '@/player-ui/store/RootState';
import { storeFactory } from '@/player-ui/store';
import eventListeners from '@/core/events';

const createStore = (player:PlayerI):Store<RootState> => {
  const store = storeFactory();

  eventListeners(player, store);

  return store;
};

export default createStore;
