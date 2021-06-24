import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createSelector } from 'reselect';
import { ICoinProps } from '../components/CoinList';

const BASE = 'https://api.coingecko.com/api/v3/';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE,
    prepareHeaders: (headers) => {
      headers.set('X-CoinAPI-Key', `${process.env.REACT_APP_COIN_API}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoinsInfo: builder.query<ICoinProps[], string>({
      query: (name) => `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`,
    }),
  }),
});

export const { useGetCoinsInfoQuery } = cryptoApi;

const cryptoApiSelector: any = (state: any) => state?.cryptoApi;

export const coinsDataSelector = createSelector(cryptoApiSelector, (coin: any) => coin?.queries?.['getCoinsInfo("assets")']?.data);
