import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarTrasladoRealizadoComponent } from './confirmar-traslado-realizado.component';

describe('ConfirmarTrasladoRealizadoComponent', () => {
  let component: ConfirmarTrasladoRealizadoComponent;
  let fixture: ComponentFixture<ConfirmarTrasladoRealizadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarTrasladoRealizadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarTrasladoRealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
