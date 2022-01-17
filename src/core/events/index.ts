import {
  MediaPlayerEventList,
  VideoElementEventList,
} from '@/core/events/EventList';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { PlayerI } from '@/core/interfaces/PlayerI';

const eventListeners = (player:PlayerI, store:Store<RootState>) => {
  MediaPlayerEventList.forEach(([type, cb]) => {
    player.mediaPlayer.addEventListener(type, cb.bind(null, player, store));
  });
  VideoElementEventList.forEach(([type, cb]) => {
    player.videoElement.addEventListener(type, cb.bind(null, player, store));
  });
};

export default eventListeners;
