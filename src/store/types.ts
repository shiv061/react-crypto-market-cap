export interface IStore {
  coins: IMarketData[] | null;
  loading: boolean;
  error: string | null;
  fetchCoinsData: () => void;
}

interface IRoi {
  times: number;
  currency: string;
  percentage: number;
}

export interface IMarketData {
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
  atl: 67.81;
  atl_change_percentage: number;
  atl_date: string;
  roi: IRoi | null;
  last_updated: string;
  price_change_percentage_1h_in_currency: number;
}
