import { IMarketData } from '../store/types';

const BASE = 'https://api.coingecko.com/api/v3';

export const fetchCoins = ({ currency = 'usd', perPage = 2, page = 1 }: { currency?: string; perPage?: number; page?: number }): Promise<IMarketData[]> => {
  return fetch(`${BASE}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=1h`).then((res) => res.json());
};
