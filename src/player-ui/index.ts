import { createApp } from 'vue';
import { PlayerI } from '@/core/interfaces/PlayerI';
import PlayerApp from '@/player-ui/components/PlayerApp.vue';
import '@/player-ui/styles/main.scss';

export default class PlayerUi {
  player: PlayerI;

  constructor(player:PlayerI) {
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
