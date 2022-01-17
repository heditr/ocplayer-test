import { BaseError } from '@/core/types/Error';
import { PlayerI } from '@/core/interfaces/PlayerI';
import { Store } from 'vuex';
import { RootState } from '@/player-ui/store/RootState';

function onError(error:BaseError) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

export function onErrorEvent(player:PlayerI, store:Store<RootState>, event?:Event) {
  console.log({ event });
  // Extract the shaka.util.Error object from the event.
  const error = {
    code: 'code',
    message: JSON.stringify(event),
  };
  onError(error);
}
