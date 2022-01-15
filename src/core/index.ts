import deepmerge from 'deepmerge';
import { Config } from '@/core/types/Config';
import DomController from '@/core/dom/Dom';
import MediaController from '@/core/media';
import shaka from '@/core/shaka';
import PlayerUi from '@/player-ui';
import { PlayerI } from '@/core/interfaces/PlayerI';

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

  ui: PlayerUi;

  private mediaPlayer: typeof shaka.Player;

  constructor(container: HTMLElement, config: Config = DEFAULT_CONFIG) {
    if (!container) throw new Error('Missing dom container');

    this.config = deepmerge(DEFAULT_CONFIG, config);
    this.container = container;
    this.mediaController = new MediaController(this.config);
    this.domController = new DomController(container, this.config);
    this.mediaPlayer = DomController.createPlayer(this.domController.videoElement);
    this.ui = new PlayerUi(this);
  }

  load(url:string):Promise<any> {
    return this.mediaPlayer.load(url);
  }

  play() {
    this.mediaPlayer.play();
  }

  pause() {
    this.mediaPlayer.pause();
  }

  seek(at:number) {
    this.mediaPlayer.setCurrentTime(at);
  }

  stop() {
    this.mediaPlayer.stop();
  }

  on(eventName:string, callback:Event) {
    this.mediaPlayer.addEventListener(eventName, callback);
  }
}
