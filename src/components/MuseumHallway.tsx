import { useState, useEffect } from 'react';
import { exhibitsData } from '../data/exhibits';
import Exhibit from './Exhibit';

const HALLWAY_LENGTH = 4000;
const SCROLL_MULTIPLIER = 2;

const MuseumHallway: React.FC = () => {
  const [zPosition, setZPosition] = useState(0);

  useEffect(() => {
    const scrollHeight = (HALLWAY_LENGTH / SCROLL_MULTIPLIER) + window.innerHeight;
    document.body.style.height = `${scrollHeight}px`;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setZPosition(scrollY * SCROLL_MULTIPLIER);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.height = 'auto';
    };
  }, []);

  const leftExhibits = exhibitsData.filter(exhibit => exhibit.side === 'left');
  const rightExhibits = exhibitsData.filter(exhibit => exhibit.side === 'right');

  return (
    <div className="hallway-container">
      <div
        className="hallway-scene"
        style={{
          transform: `translateZ(${zPosition}px)`,
        }}
      >
        <div className="wall wall--left">
          {leftExhibits.map(exhibit => (
            <Exhibit key={exhibit.id} {...exhibit} />
          ))}
        </div>

        <div className="wall wall--right">
          {rightExhibits.map(exhibit => (
            <Exhibit key={exhibit.id} {...exhibit} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuseumHallway;
