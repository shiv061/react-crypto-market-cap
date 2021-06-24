import { FC } from 'react';
import { Link } from 'react-router-dom';

export interface ICoinProps {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
  index: number;
}

function fixedNum(num: number) {
  return num.toFixed(2);
}

const CoinList: FC<ICoinProps> = ({ name, symbol, image, current_price, market_cap_rank, price_change_24h, index }) => {
  return (
    <Link to={`coins/${symbol}`} key={`${name}-${index}`}>
      <div className="h-28 flex items-center justify-between px-4 ring-2 ring-gray-200 my-5 group cursor-pointer hover:bg-gray-900 animate_colors" key={symbol}>
        <span className="pr-4">
          <h1 className="group-hover:text-white dark:text-white font-light text-2xl">{`#${market_cap_rank}`}</h1>
        </span>
        <span className="flex-1">
          <img src={image} alt={symbol} width={45} height={45} />
        </span>
        <span className="flex-1">
          <h2 className="text-gray-800 dark:text-white text-lg font-bold group group-hover:text-white">{symbol?.toUpperCase()}</h2>
          <h5 className="group-hover:text-white dark:text-white">{name}</h5>
        </span>
        <p className="flex-1 group-hover:text-white text-3xl font-bold text-gray-600 dark:text-white" style={{ color: price_change_24h > 0 ? 'turquoise' : 'tomato' }}>
          ${fixedNum(current_price)}
        </p>
      </div>
    </Link>
  );
};

export default CoinList;
