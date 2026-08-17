type MusicPlayerProps = {
  title: string;
  movie: string;
  artwork: string;
  isPlaying: boolean;
  progress: number;
  shuffle: boolean;
  onToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSeekBack: () => void;
  onSeekForward: () => void;
  onShuffleToggle: () => void;
  onQueueToggle: () => void;
};

function MusicPlayer({
  title,
  movie,
  artwork,
  isPlaying,
  progress,
  shuffle,
  onToggle,
  onNext,
  onPrev,
  onSeekBack,
  onSeekForward,
  onShuffleToggle,
  onQueueToggle,
}: MusicPlayerProps) {
  return (
    <div className={`player ${isPlaying ? 'player--playing' : ''}`}>
      <div className={`player__art ${isPlaying ? 'player__art--spinning' : ''}`}>
        <div className="player__art-vinyl">
          <img className="player__art-label" src={artwork} alt={title} />
          <div className="player__art-hole" />
        </div>
        <div className="player__art-shine" />
      </div>

      <div className="player__info">
        <div className="player__title">{title}</div>
        <div className="player__movie">{movie}</div>

        <div className="player__progress">
          <div
            className="player__progress-bar"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      <div className="player__controls">
        <button
          aria-label="Shuffle"
          className={shuffle ? 'player__control--active' : ''}
          onClick={onShuffleToggle}
        >
          ⤨
        </button>
        <button aria-label="Previous" onClick={onPrev}>↶</button>
        <button
          aria-label="Back 10 seconds"
          className="player__seek"
          onClick={onSeekBack}
        >
          −10
        </button>
        <button aria-label="Play/Pause" className="player__play" onClick={onToggle}>
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <button
          aria-label="Forward 10 seconds"
          className="player__seek"
          onClick={onSeekForward}
        >
          +10
        </button>
        <button aria-label="Next" onClick={onNext}>↷</button>
        <button aria-label="Queue" onClick={onQueueToggle}>☰</button>
      </div>
    </div>
  );
}

export default MusicPlayer;