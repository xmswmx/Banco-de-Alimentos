import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBeneficiarioComponent } from './perfil-beneficiario.component';

describe('PerfilBeneficiarioComponent', () => {
  let component: PerfilBeneficiarioComponent;
  let fixture: ComponentFixture<PerfilBeneficiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilBeneficiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilBeneficiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
