import { useEffect, useState } from 'react';

function useClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function TopBar() {
  const time = useClock();

  return (
    <div className="topbar">
      <div className="topbar__clock">{time}</div>

      <div className="topbar__live">
        <span className="topbar__dot" />
        24 listening
      </div>

      <div className="topbar__links">
        <a href="https://open.spotify.com" target="_blank" rel="noreferrer">
          Spotify ↗
        </a>
        <a href="https://music.youtube.com" target="_blank" rel="noreferrer">
          YouTube Music ↗
        </a>
      </div>
    </div>
  );
}

export default TopBar;