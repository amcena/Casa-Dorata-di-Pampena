import { useState, useEffect } from 'react';
import { exhibitsData, treePositions } from '../data/exhibits';
import Exhibit from './Exhibit';
import Tree from './Tree';

const HALLWAY_LENGTH = 2900;
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

  return (
    <div className="hallway-container">
      <div
        className="hallway-scene"
        style={{
          transform: `translateZ(${zPosition}px)`,
        }}
      >
        {/* Stone path */}
        <div className="floor" />
        <div className="ceiling" />

        {/* Left brick wall with posters */}
        <div className="wall wall--left">
          {exhibitsData.map(exhibit => (
            <Exhibit key={exhibit.id} {...exhibit} />
          ))}
        </div>

        {/* Right grass area with trees */}
        <div className="wall wall--right">
          {treePositions.map(tree => (
            <Tree key={tree.id} zPosition={tree.zPosition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MuseumHallway;
