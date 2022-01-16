import { createStore } from 'vuex';
import { UiModule } from '@/player-ui/store/modules/ui';
const state = {
    debug: false,
};
const modules = {
    ui: UiModule,
};
export const storeFactory = () => createStore({
    state,
    modules,
});
//# sourceMappingURL=index.js.map