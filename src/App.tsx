import { useEffect, useMemo, useState } from 'react';
import './App.css';
import BackgroundArtwork from './components/BackgroundArtwork';
import TopBar from './components/TopBar';
import MainTitle from './components/MainTitle';
import MusicPlayer from './components/MusicPlayer';
import EraSelector from './components/EraSelector';
import SongQueue from './components/SongQueue';
import Footer from './components/Footer';
import { songs, eras, type Era } from './data/songs';
import { useYouTubePlayer } from './hooks/useYoutubePlayer';
import { useParallax } from './hooks/useParallax';
import { useRandomBackground } from './hooks/useRandomBackground';

function App() {
  const [era, setEra] = useState<Era>(eras[0]);
  const [index, setIndex] = useState(0);
  const [shuffle, setShuffle] = useState(false);
  const [queueOpen, setQueueOpen] = useState(false);

  const filteredSongs = useMemo(
    () => songs.filter((s) => s.era === era),
    [era]
  );

  const song = filteredSongs[index] ?? filteredSongs[0];

  const goToRandom = () => {
    if (filteredSongs.length <= 1) return;
    let nextIndex = index;
    while (nextIndex === index) {
      nextIndex = Math.floor(Math.random() * filteredSongs.length);
    }
    setIndex(nextIndex);
  };

  const next = () => {
    if (shuffle) {
      goToRandom();
    } else {
      setIndex((i) => (i + 1) % filteredSongs.length);
    }
  };

  const prev = () =>
    setIndex((i) => (i - 1 + filteredSongs.length) % filteredSongs.length);

  const player = useYouTubePlayer(song?.youtubeId ?? '', next);
  const parallax = useParallax(16);
  const backgroundImage = useRandomBackground(song?.youtubeId ?? 'empty');

  // Keyboard shortcuts: ← / → seek 10s back / forward.
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // When the queue is open, leave arrow keys to scroll the list.
      if (queueOpen) return;
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      // Don't hijack keys while typing in a field.
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }
      e.preventDefault();
      player.seekBy(e.key === 'ArrowRight' ? 10 : -10);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [queueOpen, player.seekBy]);

  const changeEra = (newEra: Era) => {
    setEra(newEra);
    setIndex(0);
  };

  const selectSong = (i: number) => {
    setIndex(i);
    setQueueOpen(false);
  };

  const fallbackGradient =
    'radial-gradient(circle at 50% 30%, #1a1a1a 0%, #050505 80%)';

  const artwork = song
    ? `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`
    : '';

  return (
    <div className="stage">
      <BackgroundArtwork
        gradient={song ? song.gradient : fallbackGradient}
        backgroundImage={backgroundImage}
        offsetX={parallax.x}
        offsetY={parallax.y}
        isPlaying={player.isPlaying}
      />
      <TopBar />
      <EraSelector eras={eras} activeEra={era} onSelect={changeEra} />
      <MainTitle text="सलमान खान" />
      {song ? (
        <MusicPlayer
          title={song.title}
          movie={song.movie}
          artwork={artwork}
          isPlaying={player.isPlaying}
          progress={player.progress}
          shuffle={shuffle}
          onToggle={player.toggle}
          onNext={next}
          onPrev={prev}
          onSeekBack={() => player.seekBy(-10)}
          onSeekForward={() => player.seekBy(10)}
          onShuffleToggle={() => setShuffle((s) => !s)}
          onQueueToggle={() => setQueueOpen((q) => !q)}
        />
      ) : (
        <div className="player player--empty">INSERT CASSETTE</div>
      )}
      <Footer />
      {queueOpen && (
        <SongQueue
          songs={filteredSongs}
          activeIndex={index}
          onSelect={selectSong}
          onClose={() => setQueueOpen(false)}
        />
      )}
      <div className="stage__grain" />
      <div id="yt-hidden-player" style={{ display: 'none' }} />
    </div>
  );
}

export default App;