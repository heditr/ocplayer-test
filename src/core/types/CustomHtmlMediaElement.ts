import { UiConfig } from '@/core/types/UiConfig';

export type CustomHtmlMediaElement = HTMLVideoElement & {
  ui: { configure: (uiConfig: UiConfig) => void }
};
