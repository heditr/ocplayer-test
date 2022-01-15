import { Config } from '@/core/types/Config';
import shaka from '@/core/shaka';

export default class DomController {
  container: HTMLElement;

  videoElement: HTMLMediaElement;

  constructor(container:HTMLElement, config:Config) {
    this.container = container;
    this.videoElement = DomController.createVideoElement(config);
    this.container.appendChild(this.videoElement);
  }

  static createVideoElement(config:Config):HTMLMediaElement {
    const video = document.createElement('video');
    video.style.width = `${config.dimensions.width}px`;
    video.style.height = `${config.dimensions.height}px`;
    return video;
  }

  static createPlayer(videoElement:HTMLMediaElement):typeof shaka.Player {
    shaka.polyfill.installAll();
    if (shaka.Player.isBrowserSupported()) {
      return new shaka.Player(videoElement);
    }
    console.error('Browser not supported!');
    throw Error('Browser not supported!');
  }
}
