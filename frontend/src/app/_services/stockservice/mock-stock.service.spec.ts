import { TestBed } from '@angular/core/testing';

import { MockStockService } from './mock-stock.service';

describe('MockStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockStockService = TestBed.get(MockStockService);
    expect(service).toBeTruthy();
  });
});
