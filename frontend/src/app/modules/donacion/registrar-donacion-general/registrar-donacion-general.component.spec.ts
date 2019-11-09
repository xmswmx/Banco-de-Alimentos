import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDonacionGeneralComponent } from './registrar-donacion-general.component';

describe('RegistrarDonacionGeneralComponent', () => {
  let component: RegistrarDonacionGeneralComponent;
  let fixture: ComponentFixture<RegistrarDonacionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarDonacionGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarDonacionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
