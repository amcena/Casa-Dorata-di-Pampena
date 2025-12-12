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
  companies,
  isFestivalStyle,
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
        className={`exhibit ${isFestivalStyle ? 'exhibit--festival' : ''}`}
        style={{
          transform: `translateX(${Math.abs(zPosition)}px) translateZ(50px)`,
          top: '0px',
          left: '0px',
        }}
        onClick={handleClick}
      >
        {isFestivalStyle && companies ? (
          <div className="exhibit__festival-content">
            <div className="exhibit__festival-header">
              <h2 className="exhibit__festival-title">{title}</h2>
              <div className="exhibit__festival-year">EST. 2024</div>
            </div>
            <div className="exhibit__festival-lineup">
              {companies.map((company, index) => (
                <div
                  key={company.name}
                  className={`exhibit__festival-act exhibit__festival-act--${index === 0 ? 'headliner' : index === 1 ? 'support' : 'opener'}`}
                  style={{ color: company.accentColor }}
                >
                  {company.name}
                </div>
              ))}
            </div>
            <div className="exhibit__festival-footer">
              CLICK TO EXPLORE
            </div>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>

      {isExpanded && createPortal(
        <div className="exhibit-modal" onClick={handleClose}>
          <div className={`exhibit-modal__content ${isFestivalStyle ? 'exhibit-modal__content--festival' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="exhibit-modal__close" onClick={handleClose}>
              ×
            </button>

            {isFestivalStyle && companies ? (
              <div className="exhibit-modal__festival">
                <div className="exhibit-modal__festival-header">
                  <h2 className="exhibit-modal__title">{title}</h2>
                  <p className="exhibit-modal__festival-subtitle">Current Ventures & Projects</p>
                </div>
                <div className="exhibit-modal__companies">
                  {companies.map((company) => (
                    <div key={company.name} className="company-card">
                      {company.logoUrl && (
                        <div className="company-card__logo">
                          <img src={company.logoUrl} alt={`${company.name} logo`} />
                        </div>
                      )}
                      <div className="company-card__content">
                        <h3 className="company-card__name" style={{ color: company.accentColor }}>
                          {company.name}
                        </h3>
                        <p className="company-card__description">{company.description}</p>
                        <div className="company-card__links">
                          <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="company-card__link"
                            style={{ borderColor: company.accentColor }}
                          >
                            Visit Website →
                          </a>
                          {company.instagram && (
                            <a
                              href={`https://instagram.com/${company.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="company-card__link company-card__link--instagram"
                              style={{ borderColor: company.accentColor }}
                            >
                              @{company.instagram}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Exhibit;
