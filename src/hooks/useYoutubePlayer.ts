import { useCallback, useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function useYouTubePlayer(videoId: string, onEnded?: () => void) {
  const playerRef = useRef<any>(null);
  const onEndedRef = useRef(onEnded);
  onEndedRef.current = onEnded;

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  // When a song ends we want the next one to start automatically, and if the
  // user hits next/prev while music is playing the new song should keep
  // playing too. Manual selection / first load just cue and wait for play.
  const shouldAutoPlayRef = useRef(false);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    function createPlayer() {
      playerRef.current = new window.YT.Player('yt-hidden-player', {
        height: '0',
        width: '0',
        videoId,
        playerVars: { controls: 0, disablekb: 1 },
        events: {
          onReady: () => {
            setIsReady(true);
          },
          onStateChange: (e: any) => {
            const playing = e.data === window.YT.PlayerState.PLAYING;
            setIsPlaying(playing);
            isPlayingRef.current = playing;
            if (e.data === window.YT.PlayerState.ENDED) {
              // Auto-play the next song that `onEnded` schedules.
              shouldAutoPlayRef.current = true;
              onEndedRef.current?.();
            }
          },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      playerRef.current?.destroy?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isReady && playerRef.current) {
      if (
        (shouldAutoPlayRef.current || isPlayingRef.current) &&
        playerRef.current.loadVideoById
      ) {
        // Load and immediately start playing the new song.
        playerRef.current.loadVideoById(videoId);
      } else if (playerRef.current.cueVideoById) {
        playerRef.current.cueVideoById(videoId);
      }
      shouldAutoPlayRef.current = false;
      setProgress(0);
    }
  }, [videoId, isReady]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      const p = playerRef.current;
      if (p?.getCurrentTime && p?.getDuration) {
        const dur = p.getDuration();
        setDuration(dur);
        setProgress(dur ? p.getCurrentTime() / dur : 0);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const play = () => playerRef.current?.playVideo?.();
  const pause = () => playerRef.current?.pauseVideo?.();
  const toggle = () => (isPlaying ? pause() : play());

  // Seek relative to the current position (seconds). Clamps to the start.
  const seekBy = useCallback((delta: number) => {
    const p = playerRef.current;
    if (!p?.getCurrentTime || !p?.seekTo) return;
    const next = Math.max(0, (p.getCurrentTime() ?? 0) + delta);
    p.seekTo(next, true);
  }, []);

  return { isReady, isPlaying, progress, duration, play, pause, toggle, seekBy };
}