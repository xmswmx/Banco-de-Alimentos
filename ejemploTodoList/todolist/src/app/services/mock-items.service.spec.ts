import { TestBed } from '@angular/core/testing';

import { MockItemsService } from './mock-items.service';

describe('MockItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockItemsService = TestBed.get(MockItemsService);
    expect(service).toBeTruthy();
  });
});
