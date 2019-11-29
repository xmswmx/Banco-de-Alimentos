import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioSeleccionarDonanteComponent } from './nuevo-envio-seleccionar-donante.component';

describe('NuevoEnvioSeleccionarDonanteComponent', () => {
  let component: NuevoEnvioSeleccionarDonanteComponent;
  let fixture: ComponentFixture<NuevoEnvioSeleccionarDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEnvioSeleccionarDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEnvioSeleccionarDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
