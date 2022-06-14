import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DieselComponent } from './diesel.component';

describe('DieselComponent', () => {
  let component: DieselComponent;
  let fixture: ComponentFixture<DieselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DieselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DieselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
