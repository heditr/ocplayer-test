import { UiConfig } from '@/core/types/UiConfig';

export type CustomHtmlMediaElement = HTMLMediaElement & {
  ui: { configure: (uiConfig: UiConfig) => void }
};
