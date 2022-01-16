import { mutations } from '@/player-ui/store/modules/ui/mutations';
import { actions } from '@/player-ui/store/modules/ui/actions';
const state = {
    visible: false,
};
export const UiModule = {
    state,
    namespaced: true,
    mutations,
    actions,
};
//# sourceMappingURL=index.js.map