import { UiState } from '@/player-ui/store/modules/ui/UiState';
import { PlaybackState } from '@/player-ui/store/modules/playback/PlaybackState';

export interface RootState {
  debug:boolean,
  ui?:UiState,
  playback?:PlaybackState
}
