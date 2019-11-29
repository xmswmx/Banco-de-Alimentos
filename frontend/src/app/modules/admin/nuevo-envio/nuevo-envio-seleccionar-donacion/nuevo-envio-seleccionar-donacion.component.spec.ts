import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioSeleccionarDonacionComponent } from './nuevo-envio-seleccionar-donacion.component';

describe('NuevoEnvioSeleccionarDonacionComponent', () => {
  let component: NuevoEnvioSeleccionarDonacionComponent;
  let fixture: ComponentFixture<NuevoEnvioSeleccionarDonacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEnvioSeleccionarDonacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEnvioSeleccionarDonacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
