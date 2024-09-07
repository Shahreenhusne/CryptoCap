export  interface data {
    aed: number;
    ars: number;
    aud: number;
    bch: number;
    bdt: number;
    bhd: number;
    bmd: number;
    bnb: number;
    brl: number;
    btc: number;
    cad: number;
    chf: number;
    clp: number;
    cny: number;
    czk: number;
    dkk: number;
    dot: number;
    eos: number;
    eth: number;
    eur: number;
    gbp: number;
    gel: number;
    hkd: number;
    huf: number;
    idr: number;
    ils: number;
    inr: number;
    jpy: number;
    krw: number;
    kwd: number;
    lkr: number;
    ltc: number;
    mmk: number;
    mxn: number;
    myr: number;
    ngn: number;
    nok: number;
    nzd: number;
    php: number;
    pkr: number;
    pln: number;
    rub: number;
    sar: number;
    sek: number;
    sgd: number;
    thb: number;
    try: number;
    twd: number;
    uah: number;
    usd: number;
    vef: number;
    vnd: number;
    xag: number;
    xau: number;
    xdr: number;
    xlm: number;
    xrp: number;
    yfi: number;
    zar: number;
    bits: number;
    link: number;
    sats: number;
  }
  
  export  interface marketdata {
    price_change_percentage_24h: number ;
    market_cap : data ;
    fully_diluted_valuation: data ;
    total_volume : data ;
    low_24h : data ;
    high_24h : data ;
    max_supply : number ;
    circulating_supply : number ;
    current_price: data ;

  }

  export  interface image{
    large: string;
    small: string;
    thumb: string;

  }
  
  export interface homepage {
    0: string;
    1: string;
    2: string
  }

  export interface blockchain_site{
    1 : string
  }

  export interface link{
    homepage: homepage
    blockchain_site: blockchain_site
  }

   export   interface CoinDetailsDataType {
    id: string;
    name: string ; 
    market_data : marketdata;
    image: image;
    symbol:string ;
    sentiment_votes_down_percentage: number;
    sentiment_votes_up_percentage: number;
    links: link

   }
  

//api result is an object not an array