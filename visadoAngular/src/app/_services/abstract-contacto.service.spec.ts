import { TestBed } from '@angular/core/testing';

import { AbstractContactoService } from './abstract-contacto.service';

describe('AbstractContactoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractContactoService = TestBed.get(AbstractContactoService);
    expect(service).toBeTruthy();
  });
});
