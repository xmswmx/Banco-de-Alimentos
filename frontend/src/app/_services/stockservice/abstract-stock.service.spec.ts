import { TestBed } from '@angular/core/testing';

import { AbstractStockService } from './abstract-stock.service';

describe('AbstractStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractStockService = TestBed.get(AbstractStockService);
    expect(service).toBeTruthy();
  });
});
