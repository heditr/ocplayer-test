import { UI_VISIBLE } from '@/player-ui/store/modules/ui/actionTypes';
export const mutations = {
    [UI_VISIBLE]: (state, visible) => {
        console.log({ state, visible });
        state.visible = visible;
    },
};
//# sourceMappingURL=mutations.js.map