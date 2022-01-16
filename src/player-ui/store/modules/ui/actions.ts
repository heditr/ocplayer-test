import { UI_VISIBLE } from '@/player-ui/store/modules/ui/actionTypes';
import { ActionTree } from 'vuex';
import { UiState } from '@/player-ui/store/modules/ui/UiState';
import { RootState } from '@/player-ui/store/RootState';

export const actions:ActionTree<UiState, RootState> = {
  [UI_VISIBLE]: ({ commit }, visible:boolean) => {
    commit(UI_VISIBLE, visible);
  },
};
