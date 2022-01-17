import { Config } from '@/core/types/Config';
import shaka from '@/core/shaka';

export default class DomController {
  container: HTMLElement;

  videoElement: HTMLMediaElement;

  constructor(container:HTMLElement, config:Config) {
    this.container = container;
    this.videoElement = DomController.createVideoElement(config);
    this.container.appendChild(this.videoElement);
    this.container.classList.add('ocplayer__container');
    this.container.style.width = `${config.dimensions.width}px`;
    this.container.style.height = `${config.dimensions.height}px`;
  }

  static createVideoElement(config:Config):HTMLMediaElement {
    const video = document.createElement('video');
    video.setAttribute('playsinline', 'true');
    video.volume = 0.5;

    video.controls = false;
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.position = 'absolute';
    video.style.backgroundColor = 'black';
    video.crossOrigin = 'anonymous';
    return video;
  }

  static createPlayer(videoElement:HTMLMediaElement): shaka.Player {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      return new shaka.Player(videoElement);
    }
    console.error('Browser not supported!');
    throw Error('Browser not supported!');
  }
}
