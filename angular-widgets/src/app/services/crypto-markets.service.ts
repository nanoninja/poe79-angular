import { CryptoMarketModel } from './../models/crypto-market.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_base_url: string = 'https://api.coingecko.com/api/v3'

@Injectable({
  providedIn: 'root'
})
export class CryptoMarketsService {

  constructor(private http: HttpClient) { }

  getMarkets(perPage: number = 5, currency: string = 'usd'): Observable<CryptoMarketModel[]> {
    return this.http.get<CryptoMarketModel[]>(`${api_base_url}/coins/markets`, {
      params: {
        'per_page': perPage,
        'vs_currency': currency,
        'page': 1
      }
    });
  }
}
