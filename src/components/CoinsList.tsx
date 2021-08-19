import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IMarketData } from '../store/types';
import Overdrive from 'react-overdrive';

const GREEN = '#16c784';
const RED = '#ea3943';

export const CoinsList: FC<IMarketData> = ({
  id,
  name,
  image,
  current_price,
  symbol,
  price_change_percentage_1h_in_currency: oneHourChange,
  high_24h,
  low_24h,
  price_change_percentage_24h,
  viewRef,
}) => {
  return (
    <Link to={`/coins/${symbol}`}>
      <ParentDiv view={viewRef}>
        <span className="flex flex-col justify-center flex-1">
          <span>
            <p className="text-lg font-bold dark:text-white">
              {symbol?.toUpperCase()}
            </p>
          </span>
          <span>
            <p className="text-md font-normal dark:text-white">{name}</p>
          </span>
          <span>
            <p
              className="text-2xl font-extrabold dark:text-white"
              style={{ color: oneHourChange >= 0 ? GREEN : RED }}
            >
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
          <span>
            <p
              className="text-sm"
              style={{ color: oneHourChange >= 0 ? GREEN : RED }}
            >
              %: {price_change_percentage_24h?.toFixed(2)}
            </p>
          </span>
        </span>
        <span className="flex flex-col justify-center items-center">
          <Overdrive id={symbol}>
            <img
              src={image}
              alt={id}
              width={50}
              height={50}
              className="animate-transform transform group-hover:scale-125"
            />
          </Overdrive>
        </span>
      </ParentDiv>
    </Link>
  );
};

export const ParentDiv: FC<{
  view: IMarketData['viewRef'];
}> = ({ children, view }): any => {
  return [
    view && (
      <div
        ref={view}
        key="withViewRef"
        className="group flex h-32 px-6 ring-2 ring-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
      >
        {children}
      </div>
    ),
    !view && (
      <div
        key="withoutViewRef"
        className="group flex h-32 px-6 ring-2 ring-gray-200 hover:bg-gray-200 dark:hover:bg-gray-900 cursor-pointer"
      >
        {children}
      </div>
    ),
  ];
};
