import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwRangeComponent } from './aw-range.component';

describe('AwRangeComponent', () => {
  let component: AwRangeComponent;
  let fixture: ComponentFixture<AwRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
