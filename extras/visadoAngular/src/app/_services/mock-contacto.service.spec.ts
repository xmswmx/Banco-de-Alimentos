import { TestBed } from '@angular/core/testing';

import { MockContactoService } from './mock-contacto.service';

describe('MockContactoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockContactoService = TestBed.get(MockContactoService);
    expect(service).toBeTruthy();
  });
});
