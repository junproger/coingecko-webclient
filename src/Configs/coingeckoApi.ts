export const coingeckoApi = {
  apiinform: {
    apien: "https://www.coingecko.com/en/api",
    apiru: "https://www.coingecko.com/ru/api",
    apidocs: "https://www.coingecko.com/en/api/documentation",
    v3docs: "https://www.coingecko.com/api/documentations/v3",
    v3hash: "https://www.coingecko.com/api/documentations/v3#",
    v3slash: "https://www.coingecko.com/api/documentations/v3#/",
    apiswagger: "https://www.coingecko.com/api/documentations/v3/swagger.json",
    apiguide: "https://apiguide.coingecko.com/getting-started/introduction",
    apistarted:
      "https://apiguide.coingecko.com/getting-started/getting-started",
    apistatus: "https://status.coingecko.com/",
    apiping: "https://api.coingecko.com/api/v3/ping",
  },
  apiexplore: {
    api: "https://www.coingecko.com/en/api/documentation",
    v3api: "https://www.coingecko.com/api/documentations/v3",
    ping: "https://www.coingecko.com/api/documentations/v3#/ping",
    getping: "https://www.coingecko.com/api/documentations/v3#/ping/get_ping",
    simple: "https://www.coingecko.com/api/documentations/v3#/simple",
    getsimpleprice:
      "https://www.coingecko.com/api/documentations/v3#/simple/get_simple_price",
    getsimplecurrencies:
      "https://www.coingecko.com/api/documentations/v3#/simple/get_simple_supported_vs_currencies",
  },
  apiqueries: {
    pingquery: {
      ping: "https://api.coingecko.com/api/v3/ping",
      pingslash: "https://api.coingecko.com/api/v3/ping/",
    },
    pricequery: {
      pricebtcusd:
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd",
      pricebtcusdvol:
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_vol=true",
      pricebtcusdchange:
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true",
      pricebtcusdslash:
        "https://api.coingecko.com/api/v3/simple/price/?ids=bitcoin&vs_currencies=usd",
      pricebtceur:
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur",
      pricebtceurvol:
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur&include_24hr_vol=true",
      pricebtceurchange:
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=eur&include_24hr_change=true",
      pricebtceurslash:
        "https://api.coingecko.com/api/v3/simple/price/?ids=bitcoin&vs_currencies=eur",
      priceethusd:
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
      priceethusdvol:
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_vol=true",
      priceethusdchange:
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true",
      priceethusdslash:
        "https://api.coingecko.com/api/v3/simple/price/?ids=ethereum&vs_currencies=usd",
      priceetheur:
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur",
      priceetheurvol:
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur&include_24hr_vol=true",
      priceethethchange:
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=eur&include_24hr_change=true",
      priceetheurslash:
        "https://api.coingecko.com/api/v3/simple/price/?ids=ethereum&vs_currencies=eur",
      pricebtcusdeur:
        "https://api.coingecko.com/api/v3/simple/price/?ids=bitcoin&vs_currencies=usd,eur",
      pricebtcusdeurslash:
        "https://api.coingecko.com/api/v3/simple/price/?ids=bitcoin&vs_currencies=usd,eur",
      priceethusdeur:
        "https://api.coingecko.com/api/v3/simple/price/?ids=ethereum&vs_currencies=usd,eur",
      priceethusdeurslash:
        "https://api.coingecko.com/api/v3/simple/price/?ids=ethereum&vs_currencies=usd,eur",
    },
    globalquery: {
      global: "https://api.coingecko.com/api/v3/global",
      globalslash: "https://api.coingecko.com/api/v3/global/",
    },
    searchquery: {
      search: "https://api.coingecko.com/api/v3/search?query=",
      searchslash: "https://api.coingecko.com/api/v3/search/?query=",
      searchbtc: "https://api.coingecko.com/api/v3/search?query=btc",
      searchbtcslash: "https://api.coingecko.com/api/v3/search/?query=btc",
      searchusd: "https://api.coingecko.com/api/v3/search?query=usd",
      searchusdslash: "https://api.coingecko.com/api/v3/search/?query=usd",
      searcheur: "https://api.coingecko.com/api/v3/search?query=eur",
      searcheurslash: "https://api.coingecko.com/api/v3/search/?query=eur",
      searchgbp: "https://api.coingecko.com/api/v3/search?query=gbp",
      searchgbpslash: "https://api.coingecko.com/api/v3/search/?query=gbp",
      searchbitcoin: "https://api.coingecko.com/api/v3/search?query=bitcoin",
      searchbitcoinslash:
        "https://api.coingecko.com/api/v3/search/?query=bitcoin",
      searchethereum: "https://api.coingecko.com/api/v3/search?query=ethereum",
      searchethereumslash:
        "https://api.coingecko.com/api/v3/search/?query=ethereum",
      searchtether: "https://api.coingecko.com/api/v3/search?query=tether",
      searchtetherslash:
        "https://api.coingecko.com/api/v3/search/?query=tether",
      trending: "https://api.coingecko.com/api/v3/search/trending",
      trendingslash: "https://api.coingecko.com/api/v3/search/trending/",
    },
    indexesquery: {
      indexes: "https://api.coingecko.com/api/v3/indexes",
      indexesslash: "https://api.coingecko.com/api/v3/indexes/",
      indexeslist: "https://api.coingecko.com/api/v3/indexes/list",
      indexeslistslash: "https://api.coingecko.com/api/v3/indexes/list/",
    },
    exchangesquery: {
      exchanges: "",
      exchangesslash: "",
      exchangeslist: "",
      exchangeslistslash: "",
      exchangesbyid: "",
      exchangesbyidslash: "",
    },
    categoriesquery: {
      categories: "https://api.coingecko.com/api/v3/coins/categories",
      categoriesslash: "https://api.coingecko.com/api/v3/coins/categories/",
      categorieslist: "https://api.coingecko.com/api/v3/coins/categories/list",
      categorieslistslash:
        "https://api.coingecko.com/api/v3/coins/categories/list/",
    },
    marketsquery: {
      marketbtc:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc",
      marketbtc10:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=10",
      marketbtc10page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=10&page=1",
      marketbtc20:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=20",
      marketbtc20page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=20&page=1",
      marketbtc50:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=50",
      marketbtc50page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=50&page=1",
      marketbtc100:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=100",
      marketbtc100page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=btc&per_page=100&page=1",
      marketusd:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
      marketusd10:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10",
      marketusd10page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10&page=1",
      marketusd20:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20",
      marketusd20page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=1",
      marketusd50:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50",
      marketusd50page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=50&page=1",
      marketusd100:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100",
      marketusd100page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1",
      marketeur:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur",
      marketeur10:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=10",
      marketeur10page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=10&page=1",
      marketeur20:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=20",
      marketeur20page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=20&page=1",
      marketeur50:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=50",
      marketeur50page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=50&page=1",
      marketeur100:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=100",
      marketeur100page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&per_page=100&page=1",
      marketgbp:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp",
      marketgbp10:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=10",
      marketgbp10page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=10&page=1",
      marketgbp20:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=20",
      marketgbp20page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=20&page=1",
      marketgbp50:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=50",
      marketgbp50page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=50&page=1",
      marketgbp100:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=100",
      marketgbp100page1:
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&per_page=100&page=1",
    },
    coinsquery: {
      coins: "https://api.coingecko.com/api/v3/coins",
      coinsslash: "https://api.coingecko.com/api/v3/coins/",
      coinslist: "https://api.coingecko.com/api/v3/coins/list",
      coinslistslash: "https://api.coingecko.com/api/v3/coins/list",
      coinsbitcoin: "https://api.coingecko.com/api/v3/coins/bitcoin",
      coinsbitcionslash: "https://api.coingecko.com/api/v3/coins/bitcoin/",
      cionsethereum: "https://api.coingecko.com/api/v3/coins/ethereum",
      coinsethereumslash: "https://api.coingecko.com/api/v3/coins/ethereum/",
      coinstether: "https://api.coingecko.com/api/v3/coins/tether",
      coinstetherslash: "https://api.coingecko.com/api/v3/coins/tether/",
    },
  },
};
