import { TestBed, async, inject } from '@angular/core/testing';

import { VoluntarioGuard } from './voluntario.guard';

describe('VoluntarioGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoluntarioGuard]
    });
  });

  it('should ...', inject([VoluntarioGuard], (guard: VoluntarioGuard) => {
    expect(guard).toBeTruthy();
  }));
});
