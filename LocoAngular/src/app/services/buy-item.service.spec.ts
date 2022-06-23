import { TestBed } from '@angular/core/testing';

import { BuyItemService } from './buy-item.service';

describe('BuyItemService', () => {
  let service: BuyItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
