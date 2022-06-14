import { TestBed } from '@angular/core/testing';

import { ElectricService } from './electric.service';

describe('ElectricService', () => {
  let service: ElectricService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectricService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
