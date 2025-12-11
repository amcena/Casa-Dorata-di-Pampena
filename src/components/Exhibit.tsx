import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Exhibit as ExhibitType } from '../types/exhibit.types';

interface ExhibitProps extends ExhibitType {}

const Exhibit: React.FC<ExhibitProps> = ({
  title,
  description,
  imageUrl,
  zPosition,
  link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(true);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <>
      <div
        className="exhibit"
        style={{
          transform: `translateX(${Math.abs(zPosition)}px) translateZ(50px)`,
          top: '0px',
          left: '0px',
        }}
        onClick={handleClick}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="exhibit__image"
          />
        )}
        {!imageUrl && (
          <div className="exhibit__image" />
        )}
        <div className="exhibit__content">
          <h2 className="exhibit__title">{title}</h2>
          <p className="exhibit__description">{description}</p>
        </div>
      </div>

      {isExpanded && createPortal(
        <div className="exhibit-modal" onClick={handleClose}>
          <div className="exhibit-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="exhibit-modal__close" onClick={handleClose}>
              ×
            </button>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="exhibit-modal__image"
              />
            )}
            {!imageUrl && (
              <div className="exhibit-modal__image" />
            )}
            <div className="exhibit-modal__body">
              <h2 className="exhibit-modal__title">{title}</h2>
              <p className="exhibit-modal__description">{description}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exhibit-modal__link"
                >
                  Learn More →
                </a>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Exhibit;
