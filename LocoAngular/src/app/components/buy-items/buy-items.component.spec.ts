import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyItemsComponent } from './buy-items.component';

describe('BuyItemsComponent', () => {
  let component: BuyItemsComponent;
  let fixture: ComponentFixture<BuyItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
