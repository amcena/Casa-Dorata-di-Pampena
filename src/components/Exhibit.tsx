import { Exhibit as ExhibitType } from '../types/exhibit.types';

interface ExhibitProps extends ExhibitType {}

const Exhibit: React.FC<ExhibitProps> = ({
  title,
  description,
  imageUrl,
  zPosition,
  link,
}) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div
      className="exhibit"
      style={{
        transform: `translateY(${Math.abs(zPosition)}px) translateZ(50px)`,
        top: '50%',
        marginTop: '-200px',
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
  );
};

export default Exhibit;
