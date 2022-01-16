import buffering from '@/core/events/buffering';
import { onErrorEvent } from '@/core/events/error';
const EventList = [
    ['play', () => { console.log('play'); }],
    ['error', onErrorEvent],
    ['buffering', buffering],
];
export default EventList;
//# sourceMappingURL=EventList.js.map