import buffering from '@/core/events/buffering';
import { onErrorEvent } from '@/core/events/error';
import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import waiting from '@/core/events/waiting';

export type EventMapListener = [
  string,
  (player:PlayerI, store:Store<RootState>, event?:any) => void,
]
export type EventArrListener = Array<EventMapListener>;

const MediaPlayerEventList:EventArrListener = [
  ['play', () => { console.log('play'); }],
  ['error', onErrorEvent],
  ['buffering', buffering],
  ['loading', waiting],
];
const VideoElementEventList:EventArrListener = [
  ['waiting', waiting],
];

export {
  MediaPlayerEventList,
  VideoElementEventList,
};
