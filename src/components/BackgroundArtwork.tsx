import { useEffect, useState } from 'react';

type BackgroundArtworkProps = {
  gradient: string;
  backgroundImage?: string;
  offsetX?: number;
  offsetY?: number;
  isPlaying?: boolean;
};

function BackgroundArtwork({
  gradient,
  backgroundImage,
  offsetX = 0,
  offsetY = 0,
  isPlaying = false,
}: BackgroundArtworkProps) {
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [backgroundImage]);

  const useImage = Boolean(backgroundImage) && !imageFailed;

  return (
    <div
      className={`stage__artwork ${isPlaying ? 'stage__artwork--playing' : ''}`}
      key={backgroundImage || gradient}
    >
      <div
        className="stage__artwork-layer"
        style={{
          background: gradient,
          backgroundImage: useImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translate(${offsetX}px, ${offsetY}px) scale(1.05)`,
        }}
      />
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          onError={() => setImageFailed(true)}
          style={{ display: 'none' }}
        />
      )}
    </div>
  );
}

export default BackgroundArtwork;