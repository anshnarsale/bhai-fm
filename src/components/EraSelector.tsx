import type { Era } from '../data/songs';

const eraYears: Record<Era, string> = {
  '90s': '1990–99',
  '2000s': '2000–09',
  '2010s': '2010–19',
  '2020s': '2020+',
};

type EraSelectorProps = {
  eras: Era[];
  activeEra: Era;
  onSelect: (era: Era) => void;
};

function EraSelector({ eras, activeEra, onSelect }: EraSelectorProps) {
  return (
    <div className="era-selector">
      <span className="era-selector__label">ERA</span>
      <div className="era-selector__bar">
        {eras.map((era) => (
          <button
            key={era}
            className={`era-selector__pill ${era === activeEra ? 'era-selector__pill--active' : ''}`}
            onClick={() => onSelect(era)}
          >
            <span className="era-selector__name">{era}</span>
            <span className="era-selector__years">{eraYears[era]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EraSelector;