import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistarDonacionDetalladaComponent } from './registar-donacion-detallada.component';

describe('RegistarDonacionDetalladaComponent', () => {
  let component: RegistarDonacionDetalladaComponent;
  let fixture: ComponentFixture<RegistarDonacionDetalladaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistarDonacionDetalladaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistarDonacionDetalladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
