import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store';
import Overdrive from 'react-overdrive';

const GREEN = '#16c784';
const RED = '#ea3943';

export const CoinsPage = () => {
  const params: { coin: string } = useParams();
  const stateCoins = useStore((state) => state.coins);
  const pageCoin = useMemo(() => {
    return stateCoins?.filter((coin) => coin.symbol === params.coin)?.[0];
  }, [stateCoins, params.coin]);

  return (
    <div className="dark:bg-gray-800 h-screen w-full mt-16" style={{ maxHeight: 'calc(100vh - 64px)' }}>
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-5/6 h-3/4 md:w-2/4 md:h-3/4 relative shadow-2xl">
          <div className="w-full flex justify-center absolute -top-14">
            <Overdrive id={pageCoin?.symbol}>
              <img className="shadow-2xl rounded-full" src={pageCoin?.image} alt={pageCoin?.symbol} width={100} height={100} />
            </Overdrive>
          </div>
          <div className="mt-10 flex flex-col">
            <div className="h-16 pb-1 flex justify-center items-end">
              <h2 className="dark:text-white font-bold text-2xl">{pageCoin?.symbol?.toUpperCase()}</h2>
            </div>
            <div className="bg-gray-900 py-2 flex justify-center items-center">
              <h3 className="text-white">{pageCoin?.name}</h3>
            </div>
            <div className="dark:bg-blue-900 py-6 flex flex-col md:flex-row justify-between">
              <span className="flex-1 flex flex-col items-center">
                <p className="dark:text-white font-semibold">Rank</p>
                <p className="dark:text-white font-normal text-lg">#{pageCoin?.market_cap_rank}</p>
              </span>
              <span className="flex-1 flex flex-col items-center">
                <p className="dark:text-white font-semibold">Circulating Supply</p>
                <p className="dark:text-white font-normal text-lg">{pageCoin?.circulating_supply}</p>
              </span>
              <span className="flex-1 flex flex-col items-center">
                <p className="dark:text-white font-semibold">Total Supply</p>
                <p className="dark:text-white font-normal text-lg">{pageCoin?.total_supply}</p>
              </span>
            </div>
            <div className="py-6 flex justify-center items-center" style={{ background: pageCoin?.price_change_percentage_1h_in_currency ? (pageCoin?.price_change_percentage_1h_in_currency >= 0 ? GREEN : RED) : GREEN }}>
              <p className="font-bold text-4xl text-white">${pageCoin?.current_price}</p>
            </div>
            <div className="flex flex-col justify-center items-center py-3 md:py-10">
              <p className="dark:text-white text-xl">24h Change</p>
              <p className="dark:text-white font-bold text-lg" style={{ color: pageCoin?.price_change_24h && pageCoin?.price_change_24h > 0 ? GREEN : RED }}>
                {pageCoin?.price_change_24h}
              </p>
              <p className="dark:text-white font-bold text-2xl text-center" style={{ color: pageCoin?.price_change_24h && pageCoin?.price_change_24h > 0 ? GREEN : RED }}>
                {pageCoin?.price_change_percentage_24h} %
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
