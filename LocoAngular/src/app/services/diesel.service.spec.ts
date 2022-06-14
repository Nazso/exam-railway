import { TestBed } from '@angular/core/testing';

import { DieselService } from './diesel.service';

describe('DieselService', () => {
  let service: DieselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DieselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
