//Trending Coin Type 
export interface PriceChangePercentage {
  [key: string]: number;
}

export interface DataType {
  price: number;
  price_btc: string;
  price_change_percentage_24h: PriceChangePercentage;
  market_cap: string;
  market_cap_btc: string;
  total_volume: string;
  total_volume_btc: string;
  sparkline: string;
  content: string | null;
}

export interface items {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: DataType;
}

 export interface TrendingCoinType {
  item : items
}

//api result is an array.