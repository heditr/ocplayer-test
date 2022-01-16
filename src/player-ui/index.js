import { createApp } from 'vue';
import PlayerApp from '@/player-ui/components/PlayerApp.vue';
import '@/player-ui/styles/main.scss';
export default class PlayerUi {
    constructor(player) {
        this.player = player;
        this.init();
    }
    init() {
        const uiContainer = document.createElement('div');
        uiContainer.className = 'ocplayer__wrapper';
        this.player.container.appendChild(uiContainer);
        createApp(PlayerApp, { player: this.player })
            .use(this.player.store).mount(uiContainer);
    }
}
//# sourceMappingURL=index.js.map