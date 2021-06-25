import { FC } from 'react';
import { IMarketData } from '../store/types';

export const CoinsList: FC<IMarketData> = ({ id, name, image, current_price }) => {
  return <div>{name}</div>;
};
