import shaka from '@/core/shaka';
import { CustomHtmlMediaElement } from '@/core/types/CustomHtmlMediaElement';

export type VideoElement = HTMLMediaElement & { ui: { configure: Function } };

export interface PlayerI {
  play():void,
  load(url:string):Promise<any>,
  pause(): void,
  seek(at:number):void,
  stop():void,
  on(eventName:string, callback:Event):void,
  container:HTMLElement,
  mediaPlayer: typeof shaka.Player,
  videoElement: CustomHtmlMediaElement;
}
