import { TestBed, async, inject } from '@angular/core/testing';

import { BeneficiarioGuard } from './beneficiario.guard';

describe('BeneficiarioGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeneficiarioGuard]
    });
  });

  it('should ...', inject([BeneficiarioGuard], (guard: BeneficiarioGuard) => {
    expect(guard).toBeTruthy();
  }));
});
