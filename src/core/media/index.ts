import { Config } from '@/core/types/Config';

export default class MediaController {
  config: Config;

  constructor(config: Config) {
    this.config = config;
  }
}
