 export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank:number;
  market_cap_change_percentage_24h: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;

  // Add more properties as needed
}


export interface SearchResultCoinType{
  id:string ;
  name : string ;
  market_cap_rank : number ;
  thumb : string ;
  large : string

}
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