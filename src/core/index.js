import deepmerge from 'deepmerge';
import DomController from '@/core/dom/Dom';
import MediaController from '@/core/media';
import PlayerUi from '@/player-ui';
import createStore from '@/core/binding';
const DEFAULT_CONFIG = {
    src: '',
    autostart: false,
    backgroundImage: '',
    dimensions: {
        width: 640,
        height: 640,
    },
};
export default class Player {
    constructor(container, config = DEFAULT_CONFIG) {
        if (!container)
            throw new Error('Missing dom container');
        this.config = deepmerge(DEFAULT_CONFIG, config);
        this.container = container;
        this.mediaController = new MediaController(this.config);
        this.domController = new DomController(container, this.config);
        this.mediaPlayer = DomController.createPlayer(this.domController.videoElement);
        this.videoElement = this.domController.videoElement;
        this.store = createStore(this);
        this.ui = new PlayerUi(this);
    }
    load(url) {
        return this.mediaPlayer.load(url);
    }
    play() {
        this.mediaPlayer.play();
    }
    pause() {
        this.mediaPlayer.pause();
    }
    seek(at) {
        this.mediaPlayer.setCurrentTime(at);
    }
    stop() {
        this.mediaPlayer.stop();
    }
    on(eventName, callback) {
        this.mediaPlayer.addEventListener(eventName, callback);
    }
}
//# sourceMappingURL=index.js.map