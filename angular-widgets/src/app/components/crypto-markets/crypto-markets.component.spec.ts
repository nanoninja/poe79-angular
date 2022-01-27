import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoMarketsComponent } from './crypto-markets.component';

describe('CryptoMarketsComponent', () => {
  let component: CryptoMarketsComponent;
  let fixture: ComponentFixture<CryptoMarketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoMarketsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
