import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEnvioVolumenComponent } from './nuevo-envio-volumen.component';

describe('NuevoEnvioVolumenComponent', () => {
  let component: NuevoEnvioVolumenComponent;
  let fixture: ComponentFixture<NuevoEnvioVolumenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoEnvioVolumenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoEnvioVolumenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
