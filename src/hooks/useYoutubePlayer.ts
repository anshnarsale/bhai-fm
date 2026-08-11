import { useEffect, useRef, useState } from 'react';

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
            setIsPlaying(e.data === window.YT.PlayerState.PLAYING);
            if (e.data === window.YT.PlayerState.ENDED) {
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
    if (isReady && playerRef.current?.cueVideoById) {
      playerRef.current.cueVideoById(videoId);
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

  return { isReady, isPlaying, progress, duration, play, pause, toggle };
}