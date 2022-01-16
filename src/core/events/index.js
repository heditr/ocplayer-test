import EventList from '@/core/events/EventList';
const eventListeners = (player, store) => {
    EventList.forEach(([type, cb]) => {
        player.mediaPlayer.addEventListener(type, cb.bind(null, player, store));
    });
};
export default eventListeners;
//# sourceMappingURL=index.js.map