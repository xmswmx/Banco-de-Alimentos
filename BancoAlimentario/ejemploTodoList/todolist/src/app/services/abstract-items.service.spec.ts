import { TestBed } from '@angular/core/testing';

import { AbstractItemsService } from './abstract-items.service';

describe('AbstractItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractItemsService = TestBed.get(AbstractItemsService);
    expect(service).toBeTruthy();
  });
});
