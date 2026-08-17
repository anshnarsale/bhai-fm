import type { Song } from '../data/songs';

type SongQueueProps = {
  songs: Song[];
  activeIndex: number;
  onSelect: (index: number) => void;
  onClose: () => void;
};

function SongQueue({ songs, activeIndex, onSelect, onClose }: SongQueueProps) {
  return (
    <div className="queue-overlay" onClick={onClose}>
      <div className="queue-panel" onClick={(e) => e.stopPropagation()}>
        <div className="queue-panel__header">
          <span>Songs</span>
          <button aria-label="Close" onClick={onClose}>✕</button>
        </div>
        <div className="queue-panel__list">
          {songs.map((s, i) => (
            <button
              key={s.youtubeId}
              className={`queue-panel__item ${i === activeIndex ? 'queue-panel__item--active' : ''}`}
              onClick={() => onSelect(i)}
            >
              <span className="queue-panel__item-title">{s.title}</span>
              <span className="queue-panel__item-movie">{s.movie}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SongQueue;