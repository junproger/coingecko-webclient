export interface IAPIDATACoins {
  id: string;
  symbol: string;
  name: string;
  categories: string[];
  market_cap_rank: number;
  image: {
    thumb: string;
    small: string;
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    market_cap: {
      usd: number;
    };
    current_price: {
      usd: number;
    };
    price_change_24h: number;
    price_change_percentage_24h: number;
    fully_diluted_valuation: {
      usd: number;
    };
    circulating_supply: number;
    total_supply: number;
    max_supply: number;
  };
}
