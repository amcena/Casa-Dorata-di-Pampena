import { useEffect } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  useEffect(() => {
    console.log('LoadingScreen rendered, isLoading:', isLoading);
  }, [isLoading]);

  if (!isLoading) return null;

  const mascotPath = '/Casa-Dorata-di-Pampena/assets/mascot.svg';
  console.log('Mascot path:', mascotPath);

  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <img
          src={mascotPath}
          alt="Loading"
          className="loading-screen__mascot"
          onError={(e) => console.error('Failed to load mascot:', e)}
          onLoad={() => console.log('Mascot loaded successfully')}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
