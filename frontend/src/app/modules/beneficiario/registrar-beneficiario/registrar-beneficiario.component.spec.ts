import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarBeneficiarioComponent } from './registrar-beneficiario.component';

describe('RegistrarBeneficiarioComponent', () => {
  let component: RegistrarBeneficiarioComponent;
  let fixture: ComponentFixture<RegistrarBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
