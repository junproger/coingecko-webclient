export interface ICoinsMarketApiNorm {
  id: string;
  symbol: string;
  name: string;
  image: string;
  currency: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
}
