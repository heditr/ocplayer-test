import { MutationTree } from 'vuex';
import { UI_VISIBLE } from '@/player-ui/store/modules/ui/actionTypes';
import { UiState } from '@/player-ui/store/modules/ui/UiState';

export const mutations:MutationTree<UiState> = {
  [UI_VISIBLE]: (state, visible:boolean) => {
    state.visible = visible;
  },
};
