import { UiState } from '@/player-ui/store/modules/ui/UiState';
import { mutations } from '@/player-ui/store/modules/ui/mutations';
import { actions } from '@/player-ui/store/modules/ui/actions';

const state:UiState = {
  visible: false,
};

export const UiModule = {
  state,
  mutations,
  actions,
};
