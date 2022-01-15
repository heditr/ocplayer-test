import { BaseError } from '@/core/types/Error';
import shaka from '@/core/shaka';

function onError(error:BaseError) {
  // Log the error.
  console.error('Error code', error.code, 'object', error);
}

export function onErrorEvent(event:typeof shaka.util.Error) {
  // Extract the shaka.util.Error object from the event.
  const error = {
    code: event.detail.code,
    message: event.detail.message,
  };
  onError(event.detail);
}
