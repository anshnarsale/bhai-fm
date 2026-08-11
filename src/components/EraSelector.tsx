import type { Era } from '../data/songs';

type EraSelectorProps = {
  eras: Era[];
  activeEra: Era;
  onSelect: (era: Era) => void;
};

function EraSelector({ eras, activeEra, onSelect }: EraSelectorProps) {
  return (
    <div className="era-selector">
      {eras.map((era) => (
        <button
          key={era}
          className={`era-selector__pill ${era === activeEra ? 'era-selector__pill--active' : ''}`}
          onClick={() => onSelect(era)}
        >
          {era}
        </button>
      ))}
    </div>
  );
}

export default EraSelector;