import { useCallback, useEffect } from 'react';
import { Loader, ErrorComponent, CoinsList } from '../components';
import { useStore } from '../store';

export const MainPage = () => {
  const fetchCoinsData = useStore(useCallback((state) => state.fetchCoinsData, []));
  const coinsData = useStore((state) => state.coins);
  const error = useStore((state) => state.error);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    // fetchCoinsData();
  }, [fetchCoinsData]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorComponent errorMsg={error} />;
  }

  return (
    <div className="screen animate-color" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coinsData?.map((coin) => (
          <CoinsList key={coin.id} {...coin} />
        ))}
      </div>
    </div>
  );
};
