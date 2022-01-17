import buffering from '@/core/events/buffering';
import { onErrorEvent } from '@/core/events/error';
import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import waiting from '@/core/events/waiting';
import loaded from '@/core/events/loaded';
import play from '@/core/events/play';
import pause from '@/core/events/pause';

export type EventMapListener = [
  string,
  (player:PlayerI, store:Store<RootState>, event?:any) => void,
]
export type EventArrListener = Array<EventMapListener>;

const MediaPlayerEventList:EventArrListener = [
  ['error', onErrorEvent],
  ['buffering', buffering],
  ['loading', waiting],
  ['loaded', loaded],
];
const VideoElementEventList:EventArrListener = [
  ['waiting', waiting],
  ['play', play],
  ['pause', pause],
  ['playing', pause],
];

export {
  MediaPlayerEventList,
  VideoElementEventList,
};
