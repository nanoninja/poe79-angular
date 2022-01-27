import { CryptoMarketsService } from './../../services/crypto-markets.service';
import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CryptoMarketModel } from 'src/app/models/crypto-market.model';

@Component({
  selector: 'aw-crypto-markets',
  templateUrl: './crypto-markets.component.html',
  styleUrls: ['./crypto-markets.component.scss']
})
export class CryptoMarketsComponent implements OnInit {
  markets: CryptoMarketModel[] = [];

  @Input()
  quantity: number = 5;

  @Input()
  currency: string = 'usd';

  constructor(private cryptoMarketsService: CryptoMarketsService) { }

  ngOnInit(): void {
    this.fetchMarkets();
    interval(10000).subscribe(() => this.fetchMarkets());
  }

  private fetchMarkets() {
    this.cryptoMarketsService.getMarkets(this.quantity, this.currency).subscribe(
      (markets: CryptoMarketModel[]) => this.markets = markets
    );
  }

}
