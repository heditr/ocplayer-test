import { PLAYBACK_BUFFERING } from '@/player-ui/store/modules/playback/actionTypes';
export const actions = {
    [PLAYBACK_BUFFERING]: ({ commit }, buffering) => {
        commit(PLAYBACK_BUFFERING, buffering);
    },
};
//# sourceMappingURL=actions.js.map