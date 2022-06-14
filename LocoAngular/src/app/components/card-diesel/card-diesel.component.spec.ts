import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDieselComponent } from './card-diesel.component';

describe('CardDieselComponent', () => {
  let component: CardDieselComponent;
  let fixture: ComponentFixture<CardDieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDieselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
