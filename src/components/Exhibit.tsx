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
  isBroadwayStyle,
  isWelcomeStyle,
  isTearOffStyle,
  acts,
  starring,
  contactTabs,
  category,
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
        className={`exhibit ${isFestivalStyle ? 'exhibit--festival' : ''} ${isBroadwayStyle ? 'exhibit--broadway' : ''} ${isWelcomeStyle ? 'exhibit--welcome' : ''} ${isTearOffStyle ? 'exhibit--tearoff' : ''}`}
        style={{
          transform: `translateX(${Math.abs(zPosition)}px) translateZ(50px)`,
          top: '80px',
          left: '60px',
        }}
        onClick={handleClick}
      >
        {isWelcomeStyle ? (
          <>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="exhibit__welcome-bg"
              />
            )}
            <div className="exhibit__welcome-content">
              <h2 className="exhibit__welcome-title">{title}</h2>
              <p className="exhibit__welcome-description">{description}</p>
              <div className="exhibit__welcome-cta">
                <img
                  src="/Casa-Dorata-di-Pampena/assets/icons/hand-tap.svg"
                  alt=""
                  className="exhibit__welcome-icon"
                />
                Click to explore
              </div>
              <div className="exhibit__welcome-scroll">
                <img
                  src="/Casa-Dorata-di-Pampena/assets/icons/chevron-down.svg"
                  alt="Scroll down"
                  className="exhibit__welcome-scroll-icon"
                />
              </div>
            </div>
          </>
        ) : isBroadwayStyle && acts && starring ? (
          <div className="exhibit__broadway-content">
            <div className="exhibit__broadway-header">
              <h2 className="exhibit__broadway-title">{title}</h2>
              <p className="exhibit__broadway-subtitle">{description}</p>
            </div>
            <div className="exhibit__broadway-starring">
              <div className="exhibit__broadway-starring-label">STARRING</div>
              <div className="exhibit__broadway-roles">
                {starring.join(' • ')}
              </div>
            </div>
            <div className="exhibit__broadway-footer">
              NOW PLAYING • CLICK FOR FULL PLAYBILL
            </div>
          </div>
        ) : isTearOffStyle && contactTabs ? (
          <div className="exhibit__tearoff-content">
            <div className="exhibit__tearoff-header">
              <div className="exhibit__tearoff-pin exhibit__tearoff-pin--tl" />
              <div className="exhibit__tearoff-pin exhibit__tearoff-pin--tr" />
              <h2 className="exhibit__tearoff-title">{title}</h2>
              <p className="exhibit__tearoff-description">{description}</p>
            </div>
            <div className="exhibit__tearoff-tabs">
              {contactTabs.map((tab, index) => (
                <a
                  key={index}
                  href={tab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exhibit__tearoff-tab"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="exhibit__tearoff-tab-perforation" />
                  <div className="exhibit__tearoff-tab-content">
                    <div className="exhibit__tearoff-tab-icon">{tab.type === 'email' ? '✉' : tab.type === 'github' ? '⌘' : tab.type === 'instagram' ? '📷' : '💼'}</div>
                    <div className="exhibit__tearoff-tab-label">{tab.label}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : isFestivalStyle && companies ? (
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
          <div className={`exhibit-modal__content ${isFestivalStyle ? 'exhibit-modal__content--festival' : ''} ${isBroadwayStyle ? 'exhibit-modal__content--broadway' : ''} ${isTearOffStyle ? 'exhibit-modal__content--tearoff' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="exhibit-modal__close" onClick={handleClose}>
              <img
                src="/Casa-Dorata-di-Pampena/assets/icons/xmark-circle.svg"
                alt="Close"
                className="exhibit-modal__close-icon"
              />
            </button>

            {isTearOffStyle && contactTabs ? (
              <div className="exhibit-modal__tearoff">
                <div className="exhibit-modal__tearoff-content">
                  <div className="exhibit-modal__tearoff-header">
                    <div className="exhibit-modal__tearoff-pin exhibit-modal__tearoff-pin--tl" />
                    <div className="exhibit-modal__tearoff-pin exhibit-modal__tearoff-pin--tr" />
                    <h2 className="exhibit-modal__tearoff-title">{title}</h2>
                    <p className="exhibit-modal__tearoff-description">{description}</p>
                  </div>
                  <div className="exhibit-modal__tearoff-tabs">
                    {contactTabs.map((tab, index) => (
                      <a
                        key={index}
                        href={tab.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exhibit-modal__tearoff-tab"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="exhibit-modal__tearoff-tab-perforation" />
                        <div className="exhibit-modal__tearoff-tab-content">
                          <div className="exhibit-modal__tearoff-tab-icon">
                            {tab.type === 'email' ? '✉' : tab.type === 'github' ? '⌘' : tab.type === 'instagram' ? '📷' : '💼'}
                          </div>
                          <div className="exhibit-modal__tearoff-tab-label">{tab.label}</div>
                          <div className="exhibit-modal__tearoff-tab-type">{tab.type}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : isBroadwayStyle && acts && starring ? (
              <div className="exhibit-modal__broadway">
                <div className="exhibit-modal__broadway-header">
                  <h2 className="exhibit-modal__broadway-title">{title}</h2>
                  <p className="exhibit-modal__broadway-subtitle">{description}</p>
                  <div className="exhibit-modal__broadway-now-playing">
                    ★ NOW PLAYING ★
                  </div>
                </div>

                <div className="exhibit-modal__broadway-starring">
                  <div className="exhibit-modal__broadway-starring-label">
                    STARRING
                  </div>
                  <div className="exhibit-modal__broadway-roles">
                    {starring.map((role) => (
                      <div key={role} className="exhibit-modal__broadway-role">
                        {role}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="exhibit-modal__broadway-acts">
                  {acts.map((act) => (
                    <div key={act.number} className="exhibit-modal__broadway-act">
                      <div className="exhibit-modal__broadway-act-header">
                        <div className="exhibit-modal__broadway-act-number">
                          {act.number}
                        </div>
                        <h3 className="exhibit-modal__broadway-act-title">
                          {act.title}
                        </h3>
                      </div>
                      <ul className="exhibit-modal__broadway-scenes">
                        {act.scenes.map((scene, index) => (
                          <li key={index} className="exhibit-modal__broadway-scene">
                            {scene}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="exhibit-modal__broadway-footer">
                  <img
                    src="/Casa-Dorata-di-Pampena/assets/icons/theater-masks.svg"
                    alt=""
                    className="exhibit-modal__broadway-icon"
                  />
                  An Original Production • Directed by Ambition • Produced by Passion
                </div>
              </div>
            ) : isFestivalStyle && companies ? (
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
                            Visit Website
                            <img
                              src="/Casa-Dorata-di-Pampena/assets/icons/arrow-external.svg"
                              alt=""
                              className="company-card__link-icon"
                            />
                          </a>
                          {company.instagram && (
                            <a
                              href={`https://instagram.com/${company.instagram}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="company-card__link company-card__link--instagram"
                              style={{ borderColor: company.accentColor }}
                            >
                              <img
                                src="/Casa-Dorata-di-Pampena/assets/icons/camera.svg"
                                alt=""
                                className="company-card__link-icon"
                              />
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
