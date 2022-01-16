function onError(error) {
    // Log the error.
    console.error('Error code', error.code, 'object', error);
}
export function onErrorEvent(event) {
    // Extract the shaka.util.Error object from the event.
    const error = {
        code: event.detail.code,
        message: event.detail.message,
    };
    onError(event.detail);
}
//# sourceMappingURL=error.js.map