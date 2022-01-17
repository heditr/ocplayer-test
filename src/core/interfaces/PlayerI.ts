import shaka from '@/core/shaka';
import { CustomHtmlMediaElement } from '@/core/types/CustomHtmlMediaElement';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';
import { Config } from '@/core/types/Config';

export type VideoElement = HTMLMediaElement & { ui: { configure: Function } };

export interface PlayerI {
  play():void,
  load(url:string):Promise<any>,
  pause(): void,
  seek(at:number):void,
  stop():void,
  on(eventName:string, callback: (e: Event) => void):void,
  container:HTMLElement,
  mediaPlayer: shaka.Player,
  videoElement: CustomHtmlMediaElement;
  store:Store<RootState>;
  config:Config
}
