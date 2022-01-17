import deepmerge from 'deepmerge';
import { Config } from '@/core/types/Config';
import DomController from '@/core/dom/Dom';
import MediaController from '@/core/media';
import shaka from '@/core/shaka';
import PlayerUi from '@/player-ui';
import { PlayerI } from '@/core/interfaces/PlayerI';
import { CustomHtmlMediaElement } from '@/core/types/CustomHtmlMediaElement';
import createStore from '@/core/binding';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';

const DEFAULT_CONFIG:Config = {
  src: '',
  autostart: false,
  backgroundImage: '',
  dimensions: {
    width: 640,
    height: 640,
  },
};

export default class Player implements PlayerI {
  config: Config;

  container: HTMLElement;

  mediaController: MediaController;

  domController: DomController;

  videoElement: CustomHtmlMediaElement;

  ui: PlayerUi;

  store: Store<RootState>;

  mediaPlayer: shaka.Player;

  constructor(container: HTMLElement, config: Config = DEFAULT_CONFIG) {
    if (!container) throw new Error('Missing dom container');

    this.config = deepmerge(DEFAULT_CONFIG, config);
    this.container = container;
    this.mediaController = new MediaController(this.config);
    this.domController = new DomController(container, this.config);
    this.mediaPlayer = DomController.createPlayer(this.domController.videoElement);
    this.videoElement = this.domController.videoElement as CustomHtmlMediaElement;
    this.store = createStore(this);
    this.ui = new PlayerUi(this);
  }

  load(url:string):Promise<any> {
    return this.mediaPlayer.load(url);
  }

  play():Promise<void> {
    return this.videoElement.play();
  }

  pause():void {
    this.videoElement.pause();
  }

  seek(at:number):void {
    this.videoElement.currentTime = at;
  }

  stop():void {
    this.videoElement.pause();
    this.videoElement.currentTime = 0;
  }

  on(eventName:string, callback:EventListener):void {
    this.mediaPlayer.addEventListener(eventName, callback);
  }
}
