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