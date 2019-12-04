import { TestBed, async, inject } from '@angular/core/testing';

import { TrasladoAsignadoGuard } from './traslado-asignado.guard';

describe('TrasladoAsignadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrasladoAsignadoGuard]
    });
  });

  it('should ...', inject([TrasladoAsignadoGuard], (guard: TrasladoAsignadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
