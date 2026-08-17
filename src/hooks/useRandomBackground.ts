import { useEffect, useState } from 'react';
import { backgroundImages } from '../data/backgrounds';

function pickRandom(exclude?: string): string {
  if (backgroundImages.length === 0) return '';
  let choice = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
  if (backgroundImages.length > 1 && choice === exclude) {
    return pickRandom(exclude);
  }
  return choice;
}

export function useRandomBackground(dependencyKey: string) {
  const [current, setCurrent] = useState<string>('');

  useEffect(() => {
    setCurrent((prev) => pickRandom(prev));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependencyKey]);

  return current;
}