import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerBeneficiariosComponent } from './ver-beneficiarios.component';

describe('VerBeneficiariosComponent', () => {
  let component: VerBeneficiariosComponent;
  let fixture: ComponentFixture<VerBeneficiariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerBeneficiariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
