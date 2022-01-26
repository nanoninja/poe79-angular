export class CryptMarket {

    id: string = '';
    symbol: string = '';
    name: string = '';
    image: string = '';
    current_price: number = 0;
    market_cap: number = 0;
    market_cap_rank: number = 0;
    fully_diluted_valuation: number = 0;
    total_volume: number = 0;
    high_24h: number = 0;
    low_24h: number = 0;
    price_change_24h: number = 0;
    price_change_percentage_24h: number = 0;
    market_cap_change_24h: number = 0;
    market_cap_change_percentage_24h: number = 0;
    circulating_supply: number = 0;
    total_supply: number = 0;
    max_supply: number = 0;
    ath: number = 0;
    ath_change_percentage: number = 0;
    ath_date: Date = new Date();
    atl: number = 0;
    atl_change_percentage: number = 0;
    atl_date: Date = new Date();
    roi: number | null = null;
    last_updated: string = '';
}