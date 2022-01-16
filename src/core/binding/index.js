import { storeFactory } from '@/player-ui/store';
import eventListeners from '@/core/events';
const createStore = (player) => {
    const store = storeFactory();
    eventListeners(player.mediaPlayer, store);
    return store;
};
export default createStore;
//# sourceMappingURL=index.js.map