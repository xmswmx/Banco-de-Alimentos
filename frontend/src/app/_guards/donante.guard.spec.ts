import { TestBed, async, inject } from '@angular/core/testing';

import { DonanteGuard } from './donante.guard';

describe('DonanteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonanteGuard]
    });
  });

  it('should ...', inject([DonanteGuard], (guard: DonanteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
