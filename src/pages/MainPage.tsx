import { useCallback, useEffect, useState } from 'react';
import { Loader, ErrorComponent, CoinsList, CardLoader } from '../components';
import { useStore } from '../store';
import { SearchBox } from '../components';
import { IMarketData } from '../store/types';
import { useInView } from 'react-intersection-observer';

export const MainPage = () => {
  const fetchCoinsData = useStore(
    useCallback((state) => state.fetchCoinsData, [])
  );
  const [search, setSearch] = useState('');
  const coinsData = useStore((state) => state.coins);
  const error = useStore((state) => state.error);
  const loading = useStore((state) => state.loading);
  const perPage = useStore((state) => state.perPage);
  const setPerPage = useStore(useCallback((state) => state.setPerPage, []));
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    fetchCoinsData(perPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage]);

  useEffect(() => {
    if (inView) {
      setPerPage(perPage + 10);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  const filterCoins = useCallback(
    (coin: IMarketData) => {
      return (
        coin?.name?.toLowerCase()?.includes(search?.toLowerCase()) ||
        coin?.symbol?.toLowerCase()?.includes(search?.toLowerCase())
      );
    },
    [search]
  );

  if (error) {
    return <ErrorComponent errorMsg={error} />;
  }

  return (
    <div
      className="screen animate-color"
      style={{ minHeight: 'calc(100vh - 64px)' }}
    >
      <SearchBox search={search} setSearch={setSearch} />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coinsData
          ?.filter(filterCoins)
          ?.map((coin, index) =>
            index === coinsData.length - 1 ? (
              <CoinsList key={coin.id} viewRef={ref} {...coin} />
            ) : (
              <CoinsList key={coin.id} {...coin} />
            )
          )}
        {coinsData ? coinsData?.length > 0 && <CardLoader /> : null}
      </div>
      {loading && <Loader />}
    </div>
  );
};
