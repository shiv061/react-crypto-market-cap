import { useCallback, useEffect, useState } from 'react';
import { Loader, ErrorComponent, CoinsList } from '../components';
import { useStore } from '../store';
import { SearchBox, FetchMore } from '../components';
import { IMarketData } from '../store/types';

export const MainPage = () => {
  const fetchCoinsData = useStore(useCallback((state) => state.fetchCoinsData, []));
  const [search, setSearch] = useState('');
  const coinsData = useStore((state) => state.coins);
  const error = useStore((state) => state.error);
  const loading = useStore((state) => state.loading);

  useEffect(() => {
    if (!coinsData) fetchCoinsData(20);
  }, [coinsData, fetchCoinsData]);

  const filterCoins = useCallback(
    (coin: IMarketData) => {
      return coin?.name?.toLowerCase()?.includes(search?.toLowerCase()) || coin?.symbol?.toLowerCase()?.includes(search?.toLowerCase());
    },
    [search]
  );

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorComponent errorMsg={error} />;
  }

  return (
    <div className="screen animate-color" style={{ minHeight: 'calc(100vh - 64px)' }}>
      <SearchBox search={search} setSearch={setSearch} />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coinsData?.filter(filterCoins)?.map((coin) => (
          <CoinsList key={coin.id} {...coin} />
        ))}
        <FetchMore />
      </div>
    </div>
  );
};
