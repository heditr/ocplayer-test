import { InjectionKey } from 'vue';
import { PlayerI } from '@/core/interfaces/PlayerI';

export const PlayerKey: InjectionKey<PlayerI> = Symbol('player');
