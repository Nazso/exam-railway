import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsElectricComponent } from './card-details-electric.component';

describe('CardDetailsElectricComponent', () => {
  let component: CardDetailsElectricComponent;
  let fixture: ComponentFixture<CardDetailsElectricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDetailsElectricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
