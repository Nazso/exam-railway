import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricComponent } from './electric.component';

describe('ElectricianComponent', () => {
  let component: ElectricComponent;
  let fixture: ComponentFixture<ElectricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
