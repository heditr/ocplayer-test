import { createApp } from 'vue';
import { PlayerI } from '@/core/interfaces/PlayerI';
import PlayerApp from '@/player-ui/components/PlayerApp.vue';

export default class PlayerUi {
  player: PlayerI;

  constructor(player:PlayerI) {
    this.player = player;
    this.init();
  }

  init() {
    const uiContainer = document.createElement('div');
    this.player.container.appendChild(uiContainer);
    createApp(PlayerApp, { player: this.player }).mount(uiContainer);
  }
}
