import { FC } from 'react';
import { IMarketData } from '../store/types';

const GREEN = '#16c784';
const RED = '#ea3943';

export const CoinsList: FC<IMarketData> = ({ id, name, image, current_price, symbol, price_change_percentage_1h_in_currency: oneHourChange, high_24h, low_24h }) => {
  return (
    <div className="group flex h-32 px-6 ring-2 ring-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer">
      <span className="flex flex-col justify-center flex-1">
        <span></span>
        <span>
          <p className="text-lg font-bold dark:text-white">{symbol?.toUpperCase()}</p>
        </span>
        <span>
          <p className="text-md font-normal dark:text-white">{name}</p>
        </span>
        <span>
          <p className="text-2xl font-extrabold dark:text-white" style={{ color: oneHourChange >= 0 ? GREEN : RED }}>
            $ {current_price}
          </p>
        </span>
      </span>
      <span className="flex-1 flex flex-col justify-center">
        <span className="text-sm font-normal dark:text-white">24h</span>
        <span>
          <p className="text-sm" style={{ color: GREEN }}>
            high: {high_24h}
          </p>
        </span>
        <span>
          <p className="text-sm" style={{ color: RED }}>
            low: {low_24h}
          </p>
        </span>
      </span>
      <span className="flex flex-col justify-center items-center">
        <img src={image} alt={id} width={50} height={50} className="animate-transform transform group-hover:scale-125" />
      </span>
    </div>
  );
};
